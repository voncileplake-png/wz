"use client"

import { useEffect } from "react"

// 扩展 Window 接口以支持 Ezoic
declare global {
  interface Window {
    ezstandalone?: {
      cmd?: Array<() => void>
      showAds?: (...adIds: number[]) => void
    }
  }
}

interface EzoicAdProps {
  /**
   * 广告位 ID（从 Ezoic 控制面板获取）
   */
  adId: number
  /**
   * 额外的 CSS 类名
   */
  className?: string
  /**
   * 是否延迟加载广告（默认：false）
   */
  lazy?: boolean
}

/**
 * Ezoic 广告组件
 * 
 * 使用方法：
 * <EzoicAd adId={106} />
 * 
 * 注意：
 * - 不要对占位符 div 添加样式，这可能导致广告无法加载时出现空白区域
 * - 如果页面有多个广告位，建议将所有 ID 合并到一个 showAds() 调用中
 */
export function EzoicAd({ adId, className = "", lazy = false }: EzoicAdProps) {
  useEffect(() => {
    // 确保 ezstandalone 已初始化（在 layout.tsx 中已初始化）
    if (typeof window !== "undefined" && window.ezstandalone) {
      window.ezstandalone.cmd = window.ezstandalone.cmd || []
      
      if (lazy) {
        // 延迟加载：等待页面加载完成后再显示广告
        const timer = setTimeout(() => {
          window.ezstandalone.cmd.push(function () {
            if (window.ezstandalone && window.ezstandalone.showAds) {
              window.ezstandalone.showAds(adId)
            }
          })
        }, 1000)
        return () => clearTimeout(timer)
      } else {
        // 立即加载：将广告显示命令添加到队列中
        // 注意：如果页面有多个广告位，建议使用 EzoicAdBatch 组件
        // 将所有 ID 合并到一个 showAds() 调用中，减少服务器请求
        window.ezstandalone.cmd.push(function () {
          if (window.ezstandalone && window.ezstandalone.showAds) {
            window.ezstandalone.showAds(adId)
          }
        })
      }
    }
  }, [adId, lazy])

  return (
    <div 
      id={`ezoic-pub-ad-placeholder-${adId}`}
      className={className}
      // 注意：不要添加样式，避免广告无法加载时出现空白区域
    />
  )
}

/**
 * 批量显示多个广告位的组件
 * 优化：将多个广告位 ID 合并到一个 showAds() 调用中，减少服务器请求
 * 
 * 使用方法：
 * <EzoicAdBatch adIds={[101, 102, 103, 104]} />
 */
interface EzoicAdBatchProps {
  /**
   * 广告位 ID 数组
   */
  adIds: number[]
  /**
   * 额外的 CSS 类名
   */
  className?: string
}

export function EzoicAdBatch({ adIds, className = "" }: EzoicAdBatchProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.ezstandalone && adIds.length > 0) {
      window.ezstandalone.cmd = window.ezstandalone.cmd || []
      window.ezstandalone.cmd.push(function () {
        if (window.ezstandalone.showAds) {
          // 将所有广告位 ID 合并到一个调用中
          window.ezstandalone.showAds(...adIds)
        }
      })
    }
  }, [adIds])

  return (
    <>
      {adIds.map((adId) => (
        <div
          key={adId}
          id={`ezoic-pub-ad-placeholder-${adId}`}
          className={className}
        />
      ))}
    </>
  )
}
