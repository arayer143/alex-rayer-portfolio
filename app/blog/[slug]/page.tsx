'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon, ArrowLeftIcon, Copy, Check } from 'lucide-react'
import Navbar from '@/components/Navbar/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comments-section'
import Prism from 'prismjs'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/themes/prism-tomorrow.css'
import blogPosts, { BlogPost } from '@/data/blogData'

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const [showComments, setShowComments] = useState(false)
  const [post, setPost] = useState<BlogPost | null>(null)
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null)
  const { theme } = useTheme()
  const contentRef = useRef<HTMLDivElement>(null)

  const resolvedParams = React.use(params)

  useEffect(() => {
    const fetchedPost = blogPosts[resolvedParams.slug]
    if (fetchedPost) {
      setPost(fetchedPost)
    } else {
      notFound()
    }
  }, [resolvedParams.slug])

  useEffect(() => {
    if (post && contentRef.current) {
      Prism.highlightAllUnder(contentRef.current)
    }
  }, [post])

  if (!post) {
    return <div>Loading...</div>
  }

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  const toggleComments = () => {
    setShowComments(!showComments)
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedSnippet(text)
      setTimeout(() => setCopiedSnippet(null), 2000)
    })
  }

  const renderContent = (content: string) => {
    const parts = content.split(/(```\w+\n[\s\S]*?\n```|\n- .*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('```')) {
        const [, language, code] = part.match(/```(\w+)\n([\s\S]*?)\n```/) || []
        return (
          <div key={index} className="relative mb-4">
            <pre className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-x-auto">
              <code className={`language-${language}`}>{code.trim()}</code>
            </pre>
            <Button
              variant="outline"
              size="sm"
              className="absolute top-2 right-2"
              onClick={() => copyToClipboard(code)}
            >
              {copiedSnippet === code ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        )
      } else if (part.startsWith('\n- ')) {
        return (
          <ul key={index} className="list-disc list-inside mb-4 pl-4">
            {part.split('\n').map((item, i) => (
              <li key={i} className="mb-2">{item.slice(2)}</li>
            ))}
          </ul>
        )
      } else {
        return (
          <p key={index} className="mb-4">
            {part}
          </p>
        )
      }
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <Link href="/blog" className="flex items-center mb-4 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
          <CardDescription className="flex items-center space-x-2">
            <CalendarIcon className="w-4 h-4" />
            <span>{post.date}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="mb-4">
            <TagIcon className="w-4 h-4 mr-1" />
            {post.category}
          </Badge>
          <div ref={contentRef} className="prose max-w-none dark:prose-invert">
            {post.content && renderContent(post.content)}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start">
          <CommentToggle 
            postId={post.slug}
            isActive={showComments}
            onToggle={toggleComments}
          />
        </CardFooter>
      </Card>
      {showComments && (
        <Card className="mt-4">
          <CardContent>
            <CommentSection postId={post.slug} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}



