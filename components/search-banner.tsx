"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useMemo, useState } from "react"
import { articles } from "@/lib/articles-data"
import Link from "next/link"

export function SearchBanner() {
  const router = useRouter()
  const [q, setQ] = useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const term = q.trim()
    if (!term) return
    router.push(`/search?q=${encodeURIComponent(term)}`)
  }

  const suggestions = useMemo(() => {
    const term = q.trim().toLowerCase()
    if (!term) return [] as { id: string; title: string }[]
    return articles
      .filter((a) => a.title.toLowerCase().includes(term))
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, 6)
      .map((a) => ({ id: a.id, title: a.title }))
  }, [q])

  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8">
          {/* Left side - Text */}
          <div className="flex-shrink-0 lg:max-w-md">
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
              DON'T FIND WHAT YOU'RE LOOKING FOR? SEARCH POSTS HERE.
            </h2>
          </div>

          {/* Right side - Search */}
          <form onSubmit={onSubmit} className="flex-1 w-full lg:w-auto flex gap-2 relative">
            <Input
              type="text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search posts..."
              className="flex-1 bg-white text-black h-12"
            />
            <Button type="submit" className="bg-white hover:bg-gray-100 text-black px-8 h-12 font-medium">
              Search
            </Button>

            {suggestions.length > 0 && (
              <div className="absolute top-full mt-2 w-full max-w-[700px] bg-white text-black shadow-lg rounded-md overflow-hidden z-10">
                {suggestions.map((s) => (
                  <Link
                    key={s.id}
                    href={`/article/${s.id}`}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}
