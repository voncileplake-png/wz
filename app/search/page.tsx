import { articles } from "@/lib/articles-data"
import Link from "next/link"

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
    if (!q) return text
    const re = new RegExp(`(${q.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")})`, "ig")
    return text.split(re).map((part, idx) =>
      re.test(part) ? (
        <mark key={idx} className="bg-yellow-200 px-0.5 rounded-sm">{part}</mark>
      ) : (
        <span key={idx}>{part}</span>
      )
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Search Results</h1>

        {!query && (
          <p className="text-muted-foreground">Enter a search term in the box above to find posts.</p>
        )}

        {query && (
          <p className="text-sm text-muted-foreground mb-4">
            Found {results.length} result{results.length === 1 ? "" : "s"} for "{query}"
          </p>
        )}

        <div className="space-y-4">
          {results.map((a) => (
            <article key={a.id} className="bg-white p-5 rounded-md shadow-sm">
              <h2 className="text-lg font-semibold">
                <Link href={`/article/${a.id}`} className="hover:text-teal-600">
                  {highlight(a.title, query)}
                </Link>
              </h2>
              <p className="text-sm text-muted-foreground mt-2">{highlight(a.excerpt, query)}</p>
              <div className="text-xs text-muted-foreground mt-3">
                {a.publishedAt.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })} · {a.category}
              </div>
            </article>
          ))}

          {query && results.length === 0 && (
            <div className="bg-white p-10 rounded-md text-center text-muted-foreground">No results.</div>
          )}
        </div>
      </div>
    </div>
  )
}


