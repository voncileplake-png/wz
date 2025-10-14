"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { User } from "lucide-react"

interface Comment {
  id: string
  articleId: string
  name: string
  email: string
  website?: string
  content: string
  date: string
}

interface CommentSectionProps {
  articleId: string
}

export function CommentSection({ articleId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([])
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [website, setWebsite] = useState("")
  const [content, setContent] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Load comments from localStorage on mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments")
    if (storedComments) {
      const allComments: Comment[] = JSON.parse(storedComments)
      const articleComments = allComments.filter(c => c.articleId === articleId)
      setComments(articleComments)
    }
  }, [articleId])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Create new comment
    const newComment: Comment = {
      id: Date.now().toString(),
      articleId,
      name,
      email,
      website,
      content,
      date: new Date().toISOString(),
    }

    // Save to localStorage
    const storedComments = localStorage.getItem("comments")
    const allComments: Comment[] = storedComments ? JSON.parse(storedComments) : []
    allComments.push(newComment)
    localStorage.setItem("comments", JSON.stringify(allComments))

    // Update state
    setComments([...comments, newComment])

    // Trigger custom event to update sidebar
    window.dispatchEvent(new Event("commentsUpdated"))

    // Reset form
    setName("")
    setEmail("")
    setWebsite("")
    setContent("")
    setIsSubmitting(false)
  }

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Leave a Reply</h2>

      {/* Comment Form */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit}>
            <p className="text-sm text-muted-foreground mb-4">
              Your email address will not be published. Required fields are marked <span className="text-red-500">*</span>
            </p>

            {/* Comment Textarea */}
            <div className="mb-4">
              <textarea
                required
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[150px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your comment..."
              />
            </div>

            {/* Name Input */}
            <div className="mb-4">
              <label className="block mb-2">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Website Input */}
            <div className="mb-4">
              <label className="block mb-2">Website</label>
              <input
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2"
            >
              {isSubmitting ? "Posting..." : "Post Comment"}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Comments List */}
      {comments.length > 0 && (
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4">
            {comments.length} {comments.length === 1 ? "Comment" : "Comments"}
          </h3>
          {comments.map((comment) => (
            <Card key={comment.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-gray-900">{comment.name}</h4>
                      <span className="text-sm text-muted-foreground">
                        {new Date(comment.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    {comment.website && (
                      <a
                        href={comment.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-teal-600 hover:underline"
                      >
                        {comment.website}
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 whitespace-pre-wrap">{comment.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

