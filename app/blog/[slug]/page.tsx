'use client'

import { useState } from 'react'
import { useTheme } from 'next-themes'
import { notFound } from 'next/navigation'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { CommentSection } from '@/components/comments-section'
import { CalendarIcon, TagIcon } from 'lucide-react'
import Navbar from '@/components/Navbar/navbar'

interface BlogPost {
  title: string
  slug: string
  content: string
  category: string
  date: string
}

const blogPosts: Record<string, BlogPost> = {
  "understanding-react-hooks": {
    title: "Understanding the Basics of React Hooks",
    slug: "understanding-react-hooks",
    content: "React Hooks are a powerful feature introduced in React 16.8. They allow you to use state and other React features without writing a class. This means you can use React without classes. The most commonly used hooks are useState and useEffect...",
    category: "React",
    date: "2023-06-15"
  },
  "responsive-layouts-tailwind": {
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "responsive-layouts-tailwind",
    content: "Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It provides low-level utility classes that let you build completely custom designs...",
    category: "CSS",
    date: "2023-06-20"
  },
  "nextjs-13-app-router": {
    title: "Getting Started with Next.js 13 and App Router",
    slug: "nextjs-13-app-router",
    content: "Next.js 13 introduces a new App Router built on React Server Components. This new routing paradigm offers improved performance and developer experience...",
    category: "Next.js",
    date: "2023-06-25"
  },
  "advanced-typescript": {
    title: "Mastering TypeScript: Advanced Types and Techniques",
    slug: "advanced-typescript",
    content: "TypeScript is a powerful superset of JavaScript that adds optional static typing and other features. In this post, we'll explore some of the more advanced types and techniques that TypeScript offers...",
    category: "TypeScript",
    date: "2023-06-30"
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const [showComments, setShowComments] = useState(false)
  const { theme } = useTheme()

  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
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
          <div className="prose max-w-none">
            {post.content}
          </div>
        </CardContent>
      </Card>
      <div className="flex items-center space-x-2 mb-4">
        <Switch
          id="show-comments"
          checked={showComments}
          onCheckedChange={setShowComments}
        />
        <Label htmlFor="show-comments">Show Comments</Label>
      </div>
      {showComments && (
        <>
          <Separator className="my-4" />
          <Card>
            <CardContent>
              <CommentSection postId={post.slug} />
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}