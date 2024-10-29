'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
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
  description: string
  category: string
  date: string
}

const blogPosts: BlogPost[] = [
  {
    title: "Understanding the Basics of React Hooks",
    slug: "understanding-react-hooks",
    description: "An introduction to React Hooks and how they can simplify your React components.",
    category: "React",
    date: "2023-06-15"
  },
  {
    title: "Building Responsive Layouts with Tailwind CSS",
    slug: "responsive-layouts-tailwind",
    description: "Learn how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
    category: "CSS",
    date: "2023-06-20"
  },
  {
    title: "Getting Started with Next.js 13 and App Router",
    slug: "nextjs-13-app-router",
    description: "Explore the new features and improved performance of Next.js 13's App Router.",
    category: "Next.js",
    date: "2023-06-25"
  },
  {
    title: "Mastering TypeScript: Advanced Types and Techniques",
    slug: "advanced-typescript",
    description: "Dive deep into TypeScript's advanced features to write more robust and maintainable code.",
    category: "TypeScript",
    date: "2023-06-30"
  }
]

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [showComments, setShowComments] = useState(false)
  const { theme } = useTheme()

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="flex justify-between items-center mb-6">
        <Tabs defaultValue="All" className="w-[400px]">
          <TabsList>
            {categories.map(category => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
        <div className="flex items-center space-x-2">
          <Switch
            id="show-comments"
            checked={showComments}
            onCheckedChange={setShowComments}
          />
          <Label htmlFor="show-comments">Show Comments</Label>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card key={post.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-xl">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
              <CardDescription className="flex items-center space-x-2">
                <CalendarIcon className="w-4 h-4" />
                <span>{post.date}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{post.description}</p>
              <Badge variant="secondary" className="mb-2">
                <TagIcon className="w-4 h-4 mr-1" />
                {post.category}
              </Badge>
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <Button asChild className={buttonClass}>
                <Link href={`/blog/${post.slug}`}>Read More</Link>
              </Button>
            </CardFooter>
            {showComments && (
              <>
                <Separator className="my-4" />
                <CardContent>
                  <CommentSection postId={post.slug} />
                </CardContent>
              </>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}