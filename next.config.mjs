/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // 启用 Next.js 图片优化，大幅提升 LCP 性能
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // 启用压缩
  compress: true,
  // 注意：Next.js 15+ 字体优化已内置，请使用 next/font。optimizeFonts 已废弃并已移除。
  // 注意：ads.txt 现在由 app/ads.txt/route.ts 处理，用于合并 Google AdSense 和 Ezoic 的内容
}

export default nextConfig
