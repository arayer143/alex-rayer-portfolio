'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon, ArrowLeftIcon, Copy, Check } from 'lucide-react'
import Navbar from '@/components/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'
import { BlogPost } from '@/data/blogData'

const CodeBlock = ({ className, children }: { className?: string, children: React.ReactNode }) => {
  const [copied, setCopied] = useState(false)
  const match = /language-(\w+)/.exec(className || '')
  const language = match ? match[1] : ''

  const copyToClipboard = () => {
    if (typeof children === 'string') {
      navigator.clipboard.writeText(children).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      })
    }
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        style={tomorrow}
        language={language}
        PreTag="div"
      >
        {String(children)}
      </SyntaxHighlighter>
      <Button
        variant="outline"
        size="sm"
        className="absolute top-2 right-2"
        onClick={copyToClipboard}
      >
        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
      </Button>
    </div>
  )
}

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
                p: ({children}) => <p className="mb-4">{children}</p>,
                h1: ({children}) => <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>,
                h2: ({children}) => <h2 className="text-2xl font-bold mt-6 mb-3">{children}</h2>,
                h3: ({children}) => <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>,
                ul: ({children}) => <ul className="list-disc pl-5 mb-4">{children}</ul>,
                ol: ({children}) => <ol className="list-decimal pl-5 mb-4">{children}</ol>,
                li: ({children}) => <li className="mb-1">{children}</li>,
                blockquote: ({children}) => <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">{children}</blockquote>,
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
