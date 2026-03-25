"use client"

import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { getArticlesByCategory } from "@/lib/articles-data"

const categorySlugs = [
  "marriott-hotels",
  "hilton-hotels",
  "hyatt-gold-passport",
  "best-western-hotels",
  "carlson-hotels",
  "wyndham-hotels",
  "third-party-platforms",
  "tips",
  "travel-guides"
]

export function CategorySection() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Hotel Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categorySlugs.map((slug) => {
          const articles = getArticlesByCategory(slug)
          const categoryTitle = articles.length > 0 ? articles[0].category : slug.replace('-', ' ')
          
          return (
            <Card key={slug} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{categoryTitle}</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  {articles.length > 0 ? `${articles.length} articles available` : 'No articles available'}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {articles.slice(0, 5).map((article, index) => (
                    <li key={index} className="hover:text-foreground transition-colors">
                      <Link href={`/article/${article.id}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Link
                  href={`/category/${slug}`}
                  className="text-sm text-teal-600 hover:text-teal-700 font-medium flex items-center gap-1 group"
                >
                  View all {articles.length} articles
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
