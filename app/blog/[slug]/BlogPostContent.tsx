'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"

import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon, ArrowLeftIcon } from 'lucide-react'
import Navbar from '@/components/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'
import { BlogPost } from '@/data/blogData'
import CodeBlock from '@/components/CodeBlock'

export default function BlogPostContent({ post }: { post: BlogPost }) {
  const [showComments, setShowComments] = useState(false)

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
          <div className="prose max-w-none dark:prose-invert">
            <ReactMarkdown
              components={{
                code: ({ className, children }) => <CodeBlock className={className}>{children}</CodeBlock>,
                p: ({ children }) => <div className="mb-4">{children}</div>,
                h1: ({ children }) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
                ul: ({ children }) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
                li: ({ children }) => <li className="mb-1">{children}</li>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start pt-6 border-t border-gray-200 dark:border-gray-700">
          <CommentToggle 
            postId={post.slug}
            isActive={showComments}
            onToggle={() => setShowComments(!showComments)}
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
