'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { format } from 'date-fns'
import { Loader2 } from 'lucide-react'

interface Comment {
  _id: string
  author: string
  text: string
  createdAt: string
}

export function CommentSection({ postId }: { postId: string }) {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState({ author: '', text: '' })
  const [isLoading, setIsLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const { theme } = useTheme()

  useEffect(() => {
    fetchComments()
  }, [postId])

  const fetchComments = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`)
      if (!response.ok) {
        throw new Error('Failed to fetch comments')
      }
      const data = await response.json()
      setComments(Array.isArray(data) ? data : [])
    } catch (error) {
      console.error('Error fetching comments:', error)
      toast({
        title: "Error",
        description: "Failed to load comments. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch(`/api/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newComment),
      })
      if (!response.ok) {
        throw new Error('Failed to add comment')
      }
      const addedComment = await response.json()
      if (addedComment && addedComment._id) {
        setComments(prevComments => [addedComment, ...prevComments])
        setNewComment({ author: '', text: '' })
        toast({
          title: "Success",
          description: "Your comment has been added.",
        })
      } else {
        throw new Error('Invalid comment data received')
      }
    } catch (error) {
      console.error('Error adding comment:', error)
      toast({
        title: "Error",
        description: "Failed to add comment. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4 mb-8">
          <Input
            placeholder="Your name"
            value={newComment.author}
            onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
            required
            aria-label="Your name"
          />
          <Textarea
            placeholder="Add a comment..."
            value={newComment.text}
            onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
            required
            aria-label="Your comment"
          />
          <Button type="submit" className={`w-full ${buttonClass}`} disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Posting...
              </>
            ) : (
              'Post Comment'
            )}
          </Button>
        </form>
        {isLoading ? (
          <div className="flex justify-center items-center h-24">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        ) : comments.length > 0 ? (
          <div className="space-y-6">
            {comments.map((comment, index) => (
              <div key={comment._id} className="bg-muted rounded-lg p-4 shadow-sm">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <Avatar className="w-10 h-10 shrink-0">
                    <AvatarFallback>{comment.author[0].toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
                      <h4 className="text-sm font-semibold truncate">{comment.author}</h4>
                      <time className="text-xs text-muted-foreground" dateTime={comment.createdAt}>
                        {format(new Date(comment.createdAt), 'PPpp')}
                      </time>
                    </div>
                    <p className="text-sm text-foreground leading-relaxed break-words">{comment.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No comments yet. Be the first to comment!</p>
        )}
      </CardContent>
    </Card>
  )
}