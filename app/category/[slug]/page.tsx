import React from "react"
import { Folder } from "lucide-react"
import { getArticlesByCategory, getCategoryInfo } from "@/lib/articles-data"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"
import type { Metadata } from "next"

interface CategoryPageProps {
  params: { slug: string }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryInfo = getCategoryInfo(params.slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"
  const categoryUrl = `${siteUrl}/category/${params.slug}`
  
  return {
    title: `${categoryInfo.title} | Hotel Corporate Codes`,
    description: categoryInfo.description || `Browse articles in ${categoryInfo.title} category.`,
    openGraph: {
      title: `${categoryInfo.title} | Hotel Corporate Codes`,
      description: categoryInfo.description || `Browse articles in ${categoryInfo.title} category.`,
      url: categoryUrl,
      siteName: "Hotel Corporate Codes",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${categoryInfo.title} | Hotel Corporate Codes`,
      description: categoryInfo.description || `Browse articles in ${categoryInfo.title} category.`,
    },
    alternates: {
      canonical: categoryUrl,
    },
  }
}

// 启用静态生成和缓存，每1小时重新验证一次
export const revalidate = 3600 // 1 hour

export default function CategoryPage({ params }: CategoryPageProps) {
  const articles = getArticlesByCategory(params.slug)
  const categoryInfo = getCategoryInfo(params.slug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"
  
  // Generate structured data for category page
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": siteUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": categoryInfo.title,
        "item": `${siteUrl}/category/${params.slug}`
      }
    ]
  }

  const collectionPageStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": categoryInfo.title,
    "description": categoryInfo.description,
    "url": `${siteUrl}/category/${params.slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": articles.length,
      "itemListElement": articles.map((article, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "Article",
          "headline": article.title,
          "description": article.excerpt,
          "url": `${siteUrl}/article/${article.id}`
        }
      }))
    }
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageStructuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="text-sm text-muted-foreground mb-6">
            <ol className="flex items-center gap-2" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" className="hover:text-foreground" itemProp="item">
                  <span itemProp="name">Home</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <span className="mx-2">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-foreground" itemProp="name">{categoryInfo.title}</span>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
          </nav>

        {/* Category Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Folder className="w-8 h-8 text-gray-600" />
            <h1 className="text-3xl font-bold">Category: {categoryInfo.title}</h1>
          </div>
          <p className="text-muted-foreground ml-11">{categoryInfo.description}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Articles List */}
          <div className="space-y-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow" itemScope itemType="https://schema.org/Article">
                <h2 className="text-xl font-semibold mb-3">
                  <Link href={`/article/${article.id}`} className="hover:text-teal-600 transition-colors" itemProp="headline">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed" itemProp="description">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/article/${article.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
                    itemProp="url"
                  >
                    Read More →
                  </Link>
                  <time className="text-xs text-muted-foreground" dateTime={article.publishedAt.toISOString()} itemProp="datePublished">
                    {article.publishedAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                </div>
              </article>
            ))}

            {articles.length === 0 && (
              <div className="bg-white rounded-lg p-12 text-center">
                <p className="text-muted-foreground">No articles found in this category.</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  )
}
