import { notFound } from "next/navigation"
import { getArticleById, getCategoryInfo } from "@/lib/articles-data"
import { Sidebar } from "@/components/sidebar"
import { CommentSection } from "@/components/comment-section"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"

interface ArticlePageProps {
  params: { id: string }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleById(params.id)
  
  if (!article) {
    notFound()
  }

  const categoryInfo = getCategoryInfo(article.categorySlug)

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
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href={`/category/${article.categorySlug}`} className="hover:text-foreground">
            {categoryInfo.title}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-foreground">{article.title}</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 leading-tight">
            {article.title}
          </h1>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <time>
                {article.publishedAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            {article.author && (
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{categoryInfo.title}</span>
            </div>
          </div>

          {/* Article Excerpt */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-gray-700 italic">{article.excerpt}</p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-8">
          {/* Article Content */}
          <article className="bg-white rounded-lg p-8 shadow-sm">
            <div className="prose prose-lg max-w-none">
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
  )
}
