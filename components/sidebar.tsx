"use client"

import { useMemo } from "react"

const recentPosts = [
  { title: "Wyndham Corporate Rate Code List", date: "2024-01-15" },
  { title: "What are AccorHotels corporate rates?", date: "2024-01-12" },
  { title: "Budget car rental corporate codes", date: "2024-01-10" },
  { title: "Enterprise car rental corporate codes", date: "2024-01-08" },
  { title: "National Rental Car rental corporate rates", date: "2024-01-05" },
  { title: "Marriott Hotel Corporate Rates", date: "2024-01-03" },
  { title: "Hyatt Hotels Corporate Codes", date: "2023-12-28" },
  { title: "Hotel Corp Code", date: "2023-12-25" },
  { title: "Marriott Hotels Corporate and Discount Codes Full List", date: "2023-12-20" },
]

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
    return [...recentPosts].sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
  }, [])

  return (
    <div className="space-y-8">
      {/* Recent Posts */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
        <ul className="space-y-2">
          {sortedPosts.map((post, index) => (
            <li key={index} className="space-y-1">
              <a href="#" className="text-sm text-foreground hover:text-teal-600 hover:underline block">
                {post.title}
              </a>
              <time className="text-xs text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
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
