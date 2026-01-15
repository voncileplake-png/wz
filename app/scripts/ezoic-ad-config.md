# Ezoic 广告位代码配置说明

## ✅ 已配置的组件

项目已创建了符合 Ezoic 文档要求的广告组件：

### 组件位置
- `components/ezoic-ad.tsx` - Ezoic 广告组件

### 组件功能

#### 1. EzoicAd 组件（单个广告位）
```tsx
<EzoicAd adId={106} />
```

**特性：**
- ✅ 自动创建占位符 div：`<div id="ezoic-pub-ad-placeholder-{adId}"></div>`
- ✅ 自动调用 `ezstandalone.showAds(adId)`
- ✅ 支持延迟加载（`lazy` 属性）
- ✅ 符合 Ezoic 文档格式要求

#### 2. EzoicAdBatch 组件（多个广告位优化）
```tsx
<EzoicAdBatch adIds={[101, 102, 103, 104]} />
```

**特性：**
- ✅ 将多个广告位 ID 合并到一个 `showAds()` 调用中
- ✅ 减少服务器请求，提高页面加载速度
- ✅ 符合 Ezoic 最佳实践

## 📍 当前广告位使用情况

### 侧边栏（Sidebar）
- **位置**: `components/sidebar.tsx`
- **广告位 1**: 侧边栏顶部 - `EzoicAd adId={106}`
- **广告位 2**: 侧边栏底部 - `EzoicAd adId={106}`

**注意**: 如果侧边栏需要两个不同的广告位，建议使用不同的广告位 ID，并使用 `EzoicAdBatch` 组件优化：

```tsx
// 优化示例（如果使用不同 ID）
<EzoicAdBatch adIds={[106, 107]} />
```

## 📋 添加新广告位的步骤

### 1. 从 Ezoic 控制面板获取广告位 ID

### 2. 在需要的位置添加广告组件

**单个广告位：**
```tsx
import { EzoicAd } from "@/components/ezoic-ad"

<EzoicAd adId={您的广告位ID} />
```

**多个广告位（推荐）：**
```tsx
import { EzoicAdBatch } from "@/components/ezoic-ad"

<EzoicAdBatch adIds={[101, 102, 103]} />
```

### 3. 常见广告位置

- **文章内容中**: 在文章段落之间插入
- **侧边栏**: 侧边栏顶部、中间、底部
- **页脚上方**: 页面底部
- **文章列表**: 列表项之间

## ⚠️ 重要注意事项

### 1. 不要对占位符 div 添加样式
❌ **错误示例：**
```tsx
<div 
  id="ezoic-pub-ad-placeholder-106"
  className="my-4 p-4" // ❌ 不要添加样式
  style={{ minHeight: '250px' }} // ❌ 不要预留空间
/>
```

✅ **正确做法：**
```tsx
<EzoicAd adId={106} /> // ✅ 组件会自动处理
```

**原因**: 添加样式或为广告预留空间可能会导致广告无法加载时出现空白区域。

### 2. 多个广告位优化
如果页面包含多个广告位，应该将所有广告位 ID 合并到一个 `showAds()` 调用中：

✅ **推荐：**
```tsx
<EzoicAdBatch adIds={[101, 102, 103, 104]} />
// 内部调用: ezstandalone.showAds(101, 102, 103, 104)
```

❌ **不推荐：**
```tsx
<EzoicAd adId={101} />
<EzoicAd adId={102} />
<EzoicAd adId={103} />
// 会生成多个独立的 showAds() 调用
```

### 3. 删除其他广告网络代码
确保已删除其他广告网络（如 Google AdSense 直接代码）的遗留代码，避免冲突。

## 🔍 验证配置

### 检查清单
- [x] Ezoic 头部脚本已添加到 `app/layout.tsx`
- [x] 广告组件已创建并符合文档格式
- [x] 广告位已添加到页面中
- [ ] 所有广告位 ID 已从 Ezoic 控制面板获取
- [ ] 多个广告位已使用 `EzoicAdBatch` 优化
- [ ] 已删除其他广告网络的遗留代码

### 测试方法
1. 打开浏览器开发者工具（F12）
2. 访问包含广告的页面
3. 检查控制台是否有错误
4. 检查 Network 标签，确认 Ezoic 脚本已加载
5. 检查页面元素，确认广告占位符 div 存在
6. 验证广告是否正确显示

## 📚 参考文档

- Ezoic 官方文档：广告位代码集成指南
- 组件源码：`components/ezoic-ad.tsx`
- 头部脚本配置：`app/layout.tsx`
