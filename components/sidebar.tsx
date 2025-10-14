"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import { articles, getArticleById } from "@/lib/articles-data"

interface Comment {
  id: string
  articleId: string
  name: string
  email: string
  website?: string
  content: string
  date: string
}

export function Sidebar() {
  const [recentComments, setRecentComments] = useState<Comment[]>([])

  const sortedPosts = useMemo(() => {
    return [...articles]
      .sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
      .slice(0, 10)
  }, [])

  // Load recent comments from localStorage
  useEffect(() => {
    const storedComments = localStorage.getItem("comments")
    if (storedComments) {
      const allComments: Comment[] = JSON.parse(storedComments)
      // Sort by date (newest first) and take the latest 8
      const sorted = allComments
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 8)
      setRecentComments(sorted)
    }

    // Listen for storage changes to update comments in real-time
    const handleStorageChange = () => {
      const storedComments = localStorage.getItem("comments")
      if (storedComments) {
        const allComments: Comment[] = JSON.parse(storedComments)
        const sorted = allComments
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .slice(0, 8)
        setRecentComments(sorted)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    // Also listen for custom event when comments are added on same page
    window.addEventListener("commentsUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("commentsUpdated", handleStorageChange)
    }
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
        {recentComments.length > 0 ? (
          <ul className="space-y-2">
            {recentComments.map((comment) => {
              const article = getArticleById(comment.articleId)
              return (
                <li key={comment.id} className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{comment.name}</span>{" "}
                  {article ? (
                    <>
                      <span>on </span>
                      <Link 
                        href={`/article/${comment.articleId}`}
                        className="hover:underline hover:text-teal-600"
                      >
                        {article.title}
                      </Link>
                    </>
                  ) : (
                    <span>on a post</span>
                  )}
                </li>
              )
            })}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">No comments yet.</p>
        )}
      </div>
    </div>
  )
}
