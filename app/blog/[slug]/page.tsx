'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon, ArrowLeftIcon, Copy, Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'
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
          <div key={index} className="relative mb-6">
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
        const items = part.split('\n').filter(item => item.trim() !== '' && item !== '- ')
        if (items.length === 0) return null
        return (
          <ul key={index} className="list-disc list-inside mb-6 pl-4 space-y-2">
            {items.map((item, i) => (
              <li key={i} className="text-gray-700 dark:text-gray-300">{item.slice(2)}</li>
            ))}
          </ul>
        )
      } else {
        return (
          <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            {part}
          </p>
        )
      }
    }).filter(Boolean)
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Navbar />
      <Link href="/blog" className="flex items-center mb-8 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors">
        <ArrowLeftIcon className="w-4 h-4 mr-2" />
        Back to all posts
      </Link>
      <Card className="mb-8 shadow-lg">
        <CardHeader className="space-y-4">
          <CardTitle className="text-4xl font-bold text-gray-900 dark:text-gray-100">{post.title}</CardTitle>
          <CardDescription className="flex items-center space-x-2 text-gray-500 dark:text-gray-400">
            <CalendarIcon className="w-4 h-4" />
            <span>{post.date}</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            <TagIcon className="w-4 h-4 mr-1" />
            {post.category}
          </Badge>
          <div ref={contentRef} className="prose max-w-none dark:prose-invert">
            {post.content && renderContent(post.content)}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start pt-6 border-t border-gray-200 dark:border-gray-700">
          <CommentToggle 
            postId={post.slug}
            isActive={showComments}
            onToggle={toggleComments}
          />
        </CardFooter>
      </Card>
      {showComments && (
        <Card className="mt-8 shadow-lg">
          <CardContent>
            <CommentSection postId={post.slug} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}