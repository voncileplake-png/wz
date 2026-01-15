import { NextResponse } from 'next/server'

export async function GET() {
  try {
    // 获取 Ezoic 的 ads.txt 内容
    const ezoicUrl = 'https://srv.adstxtmanager.com/19390/hotelcodeshub.com'
    const ezoicResponse = await fetch(ezoicUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
      next: {
        revalidate: 86400, // 缓存 24 小时
      },
    })

    let ezoicContent = ''
    if (ezoicResponse.ok) {
      ezoicContent = await ezoicResponse.text()
    }

    // Google AdSense 的 ads.txt 条目（确保始终包含）
    // 格式: google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
    const googleAdSense = 'google.com, pub-4502547559187668, DIRECT, f08c47fec0942fa0'

    // 合并内容策略：
    // 1. 始终确保包含 Google AdSense 条目
    // 2. 合并 Ezoic 的内容（如果存在且不重复）
    let mergedContent = ''
    
    if (ezoicContent) {
      // 检查 Ezoic 内容中是否已包含 Google AdSense（通过 pub ID 或 google.com 域名）
      const hasGoogleInEzoic = ezoicContent.includes('pub-4502547559187668')
      
      if (hasGoogleInEzoic) {
        // 如果 Ezoic 已经包含 Google AdSense，直接使用 Ezoic 的内容
        mergedContent = ezoicContent.trim()
      } else {
        // 如果 Ezoic 没有包含 Google AdSense，先添加 Google AdSense，然后添加 Ezoic 内容
        mergedContent = googleAdSense + '\n' + ezoicContent.trim()
      }
    } else {
      // 如果无法获取 Ezoic 内容，至少返回 Google AdSense 的条目
      mergedContent = googleAdSense
    }

    // 返回合并后的 ads.txt 内容
    return new NextResponse(mergedContent.trim(), {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, s-maxage=86400', // 缓存 24 小时
      },
    })
  } catch (error) {
    // 如果获取 Ezoic 内容失败，至少返回 Google AdSense 的条目
    console.error('获取 Ezoic ads.txt 失败:', error)
    const fallbackContent = 'google.com, pub-4502547559187668, DIRECT, f08c47fec0942fa0'
    
    return new NextResponse(fallbackContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=3600', // 错误时缓存 1 小时
      },
    })
  }
}

