import type { MetadataRoute } from 'next'
import { articles } from '@/lib/articles-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://hotelcorporatecodes.com'

  const articleUrls = articles.map((article) => ({
    url: `${siteUrl}/article/${article.id}`,
    lastModified: article.publishedAt,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const categoryUrls = [
    'marriott-hotels',
    'hilton-hotels',
    'best-western-hotels',
    'hyatt-gold-passport',
    'carlson-hotels',
    'wyndham-hotels',
    'third-party-platforms',
    'tips',
    'travel-guides',
  ].map((slug) => ({
    url: `${siteUrl}/category/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    ...categoryUrls,
    ...articleUrls,
  ]
}
