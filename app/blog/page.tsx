'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon } from 'lucide-react'
import Navbar from '@/components/Navbar/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'

interface BlogPost {
  title: string
  slug: string
  description: string
  category: string
  date: string
  content?: string
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
  },
  {
    title: "Building a REST API Comment Section with Next.js and MongoDB",
    slug: "rest-api-comment-section",
    description: "Learn how to create a fully functional comment section using Next.js API routes and MongoDB, with a step-by-step guide on installation and implementation.",
    category: "Web Development",
    date: "2023-07-05"
  }
]

export default function BlogIndexPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeComments, setActiveComments] = useState<string | null>(null)
  const { theme } = useTheme()

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))]

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  const toggleComments = (slug: string) => {
    setActiveComments(activeComments === slug ? null : slug)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="mb-6">
        <Tabs defaultValue="All" className="w-full">
          <TabsList className="grid grid-cols-3 sm:flex">
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
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {filteredPosts.map((post) => (
          <div key={post.slug} className="flex flex-col">
            <Card className="flex-grow flex flex-col">
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
              <CardContent className="flex-grow flex flex-col">
                <p className="mb-4">{post.description}</p>
                <div className="mt-auto flex flex-col space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className="self-start">
                      <TagIcon className="w-4 h-4 mr-1" />
                      {post.category}
                    </Badge>
                    <Button asChild className={buttonClass}>
                      <Link href={`/blog/${post.slug}`}>Read More</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="w-full flex flex-col items-start">
                <CommentToggle 
                  postId={post.slug} 
                  isActive={activeComments === post.slug}
                  onToggle={() => toggleComments(post.slug)}
                />
              </CardFooter>
            </Card>
            {activeComments === post.slug && (
              <Card className="mt-4 w-full">
                <CardContent>
                  <CommentSection postId={post.slug} />
                </CardContent>
              </Card>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}