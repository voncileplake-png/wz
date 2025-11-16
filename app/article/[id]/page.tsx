import React from "react"
import { notFound } from "next/navigation"
import { getArticleById, getCategoryInfo } from "@/lib/articles-data"
import { Sidebar } from "@/components/sidebar"
import { CommentSection } from "@/components/comment-section"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"
import type { Metadata } from "next"

interface ArticlePageProps {
  params: { id: string }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleById(params.id)
  
  if (!article) {
    return {
      title: "Article Not Found",
    }
  }

  const categoryInfo = getCategoryInfo(article.categorySlug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"
  const articleUrl = `${siteUrl}/article/${article.id}`
  
  // Create a description with keywords
  const description = article.excerpt || `${article.title} - ${categoryInfo.title}. ${article.keywords?.slice(0, 3).join(", ")}`
  
  return {
    title: `${article.title} | Hotel Corporate Codes`,
    description: description,
    keywords: article.keywords?.join(", ") || "",
    authors: article.author ? [{ name: article.author }] : undefined,
    openGraph: {
      title: article.title,
      description: description,
      url: articleUrl,
      siteName: "Hotel Corporate Codes",
      locale: "en_US",
      type: "article",
      publishedTime: article.publishedAt.toISOString(),
      authors: article.author ? [article.author] : undefined,
      section: categoryInfo.title,
      tags: article.keywords || [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: description,
    },
    alternates: {
      canonical: articleUrl,
    },
    other: {
      "article:published_time": article.publishedAt.toISOString(),
      "article:section": categoryInfo.title,
    },
  }
}

// 启用静态生成和缓存，每1小时重新验证一次
export const revalidate = 3600 // 1 hour

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)
  
  if (!article) {
    notFound()
  }

  const categoryInfo = getCategoryInfo(article.categorySlug)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hotelcorporatecodes.com"
  const articleUrl = `${siteUrl}/article/${article.id}`

  // Generate structured data for SEO
  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.excerpt,
    "image": `${siteUrl}/og-image.jpg`, // You can add actual images later
    "datePublished": article.publishedAt.toISOString(),
    "dateModified": article.publishedAt.toISOString(),
    "author": article.author ? {
      "@type": "Person",
      "name": article.author
    } : {
      "@type": "Organization",
      "name": "Hotel Corporate Codes"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Hotel Corporate Codes",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "articleSection": categoryInfo.title,
    "keywords": article.keywords?.join(", ") || ""
  }

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
        "item": `${siteUrl}/category/${article.categorySlug}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": articleUrl
      }
    ]
  }

  // Extract FAQ from content if present
  const faqMatches = article.content.match(/## Frequently Asked Questions|## FAQ/g)
  let faqStructuredData: {
    "@context": string
    "@type": string
    "mainEntity": Array<{
      "@type": string
      "name": string
      "acceptedAnswer": {
        "@type": string
        "text": string
      }
    }>
  } | null = null
  
  if (faqMatches) {
    const faqItems: Array<{
      "@type": string
      "name": string
      "acceptedAnswer": {
        "@type": string
        "text": string
      }
    }> = []
    
    // Extract FAQ questions and answers
    const questions = article.content.match(/### \*\*\d+\. ([^*]+)\*\*/g)
    if (questions && questions.length > 0) {
      const contentAfterFAQ = article.content.split(/## Frequently Asked Questions|## FAQ/)[1]
      if (contentAfterFAQ) {
        questions.forEach((questionMatch) => {
          const cleanQuestion = questionMatch.replace(/### \*\*\d+\. /g, "").replace(/\*\*/g, "").trim()
          // Find the answer after the question
          const answerMatch = contentAfterFAQ.split(questionMatch)[1]
          if (answerMatch) {
            // Extract answer until next question or end
            const answerText = answerMatch
              .split(/### \*\*\d+\.|---/)[0]
              .trim()
              .replace(/\*\*/g, "")
              .replace(/^\n+/g, "")
              .substring(0, 500)
            
            if (cleanQuestion && answerText && answerText.length > 10) {
              faqItems.push({
                "@type": "Question",
                "name": cleanQuestion,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": answerText
                }
              })
            }
          }
        })
      }
    }

    if (faqItems.length > 0) {
      faqStructuredData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems
      }
    }
  }

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    const elements: JSX.Element[] = []
    let key = 0

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim()
      
      if (line.startsWith('## ')) {
        elements.push(
          <h2 key={key++} className="text-2xl font-bold mt-8 mb-4 text-gray-900">
            {line.replace('## ', '')}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold mt-6 mb-3 text-gray-800">
            {line.replace('### ', '')}
          </h3>
        )
      } else if (line.startsWith('**') && line.endsWith('**')) {
        elements.push(
          <p key={key++} className="font-semibold text-gray-900 mb-3">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      } else if (line.startsWith('• ')) {
        elements.push(
          <li key={key++} className="ml-4 mb-1 text-gray-700">
            {line.replace('• ', '')}
          </li>
        )
      } else if (line.match(/^\d+\. /)) {
        elements.push(
          <li key={key++} className="ml-4 mb-1 text-gray-700 list-decimal">
            {line.replace(/^\d+\. /, '')}
          </li>
        )
      } else if (line === '') {
        // Empty line for spacing
        elements.push(<div key={key++} className="mb-2"></div>)
      } else if (line.length > 0) {
        elements.push(
          <p key={key++} className="mb-4 text-gray-700 leading-relaxed">
            {line}
          </p>
        )
      }
    }

    return elements
  }

  return (
    <>
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {faqStructuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
      )}
      
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
                <Link href={`/category/${article.categorySlug}`} className="hover:text-foreground" itemProp="item">
                  <span itemProp="name">{categoryInfo.title}</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <span className="mx-2">/</span>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <span className="text-foreground" itemProp="name">{article.title}</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
              {article.title}
            </h1>
            
            {/* Article Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" aria-hidden="true" />
                <time dateTime={article.publishedAt.toISOString()} itemProp="datePublished">
                  {article.publishedAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              {article.author && (
                <div className="flex items-center gap-2" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <User className="w-4 h-4" aria-hidden="true" />
                  <span itemProp="name">{article.author}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" aria-hidden="true" />
                <span itemProp="articleSection">{categoryInfo.title}</span>
              </div>
            </div>

            {/* Article Excerpt */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
              <p className="text-gray-700 italic" itemProp="description">{article.excerpt}</p>
            </div>
          </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Article Content */}
          <article className="bg-white rounded-lg p-8 shadow-sm" itemScope itemType="https://schema.org/Article">
            <div className="prose prose-lg max-w-none" itemProp="articleBody">
              {renderContent(article.content)}
            </div>
            
            {/* Keywords */}
            {article.keywords && article.keywords.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Keywords:</h4>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Comment Section */}
            <CommentSection articleId={article.id} />
          </article>

          {/* Sidebar */}
          <Sidebar />
        </div>
      </div>
    </div>
    </>
  )
}
