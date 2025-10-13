"use client"

import { useMemo } from "react"
import Link from "next/link"
import { articles } from "@/lib/articles-data"

const recentComments = [
  { author: "Freddy", text: "on Some of Hilton corporate discount code list" },
  { author: "Jay", text: "on What is a Hotel Corporate Rate?" },
  { author: "Lori", text: "on Wyndham Corporate Rate Code List" },
  { author: "Lori", text: "on Wyndham Corporate Rate Code List" },
  { author: "Lori", text: "on Wyndham Corporate Rate Code List" },
  { author: "TEXAS MARCHE", text: "on IHG Hotels Corporate Codes" },
  { author: "Lori", text: "on Wyndham Corporate Rate Code List" },
  { author: "Johnson", text: "on National Rental Car rental corporate codes" },
]

export function Sidebar() {
  const sortedPosts = useMemo(() => {
    return [...articles]
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, 10)
  }, [])

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-2">
          {sortedPosts.map((post, index) => (
            <li key={index} className="space-y-1">
              <Link href={`/article/${post.id}`} className="text-sm text-foreground hover:text-teal-600 hover:underline block">
                {post.title}
              </Link>
              <time className="text-xs text-muted-foreground">
                {post.publishedAt.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Comments */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Comments</h2>
        <ul className="space-y-2">
          {recentComments.map((comment, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{comment.author}</span>{" "}
              <a href="#" className="hover:underline">
                {comment.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
