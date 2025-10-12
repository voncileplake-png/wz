import { Folder } from "lucide-react"
import { getArticlesByCategory, getCategoryInfo } from "@/lib/articles-data"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const articles = getArticlesByCategory(params.slug)
  const categoryInfo = getCategoryInfo(params.slug)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-muted-foreground mb-6">
          <Link href="/" className="hover:text-foreground">
            Home
          </Link>
          <span className="mx-2">/</span>
          <span>{categoryInfo.title}</span>
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
              <article key={article.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-3">
                  <Link href={`/article/${article.id}`} className="hover:text-teal-600 transition-colors">
                    {article.title}
                  </Link>
                </h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/article/${article.id}`}
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center gap-1"
                  >
                    Read More →
                  </Link>
                  <div className="text-xs text-muted-foreground">
                    {article.publishedAt.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </div>
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
  )
}
