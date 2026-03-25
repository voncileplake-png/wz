import { articles } from "@/lib/articles-data"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Search | Hotel Corporate Codes",
  description: "Search for hotel corporate codes, discount rates, and travel tips.",
  robots: { index: false, follow: true },
}

function filterArticles(query: string) {
  const q = query.toLowerCase()
  return articles
    .filter((a) => {
      const inTitle = a.title.toLowerCase().includes(q)
      const inExcerpt = a.excerpt.toLowerCase().includes(q)
      const inContent = a.content.toLowerCase().includes(q)
      const inKeywords = (a.keywords || []).some((k) => k.toLowerCase().includes(q))
      return inTitle || inExcerpt || inContent || inKeywords
    })
    .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}

export default function SearchPage({ searchParams }: { searchParams: { q?: string } }) {
  const query = (searchParams?.q || "").trim()
  const results = query ? filterArticles(query) : []

  const highlight = (text: string, q: string) => {
    if (!q) return <>{text}</>
    const re = new RegExp(`(${q.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "ig")
    return (
      <>
        {text.split(re).map((part, idx) =>
          re.test(part) ? (
            <mark key={idx} className="bg-yellow-200 px-0.5 rounded-sm">
              {part}
            </mark>
          ) : (
            <span key={idx}>{part}</span>
          )
        )}
      </>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SiteHeader />
      <div className="container mx-auto px-4 py-8 flex-1 max-w-3xl">
        <h1 className="text-2xl font-bold mb-2">Search Results</h1>

        {!query && (
          <p className="text-muted-foreground">
            Enter a search term above to find articles about hotel corporate codes and travel tips.
          </p>
        )}

        {query && (
          <p className="text-sm text-muted-foreground mb-6">
            Found <strong>{results.length}</strong> result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
        )}

        <div className="space-y-4">
          {results.map((a) => (
            <article key={a.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold mb-1">
                <Link href={`/article/${a.id}`} className="hover:text-teal-600 transition-colors">
                  {highlight(a.title, query)}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                {highlight(a.excerpt, query)}
              </p>
              <div className="text-xs text-muted-foreground mt-3 flex items-center gap-2">
                <time dateTime={a.publishedAt.toISOString()}>
                  {a.publishedAt.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <span>·</span>
                <Link href={`/category/${a.categorySlug}`} className="hover:text-teal-600">
                  {a.category}
                </Link>
              </div>
            </article>
          ))}

          {query && results.length === 0 && (
            <div className="bg-white p-10 rounded-lg text-center text-muted-foreground">
              <p className="mb-3">No results found for &ldquo;{query}&rdquo;.</p>
              <Link href="/" className="text-teal-600 hover:underline text-sm">
                ← Browse all categories
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}
