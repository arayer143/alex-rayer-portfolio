'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon } from 'lucide-react'
import Navbar from '@/components/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'
import { BlogPost } from '@/data/blogPosts'

interface BlogIndexContentProps {
  posts: BlogPost[]
}

export default function BlogIndexContent({ posts }: BlogIndexContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeComments, setActiveComments] = useState<string | null>(null)
  const { theme } = useTheme()

  const categories = useMemo(() => 
    ["All", ...Array.from(new Set(posts.map(post => post.category)))],
    [posts]
  )

  const filteredPosts = useMemo(() => 
    selectedCategory === "All" 
      ? posts 
      : posts.filter(post => post.category === selectedCategory),
    [selectedCategory, posts]
  )

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
          <BlogPostCard 
            key={post.slug}
            post={post}
            buttonClass={buttonClass}
            isCommentsActive={activeComments === post.slug}
            onToggleComments={() => toggleComments(post.slug)}
          />
        ))}
      </div>
    </div>
  )
}

interface BlogPostCardProps {
  post: BlogPost
  buttonClass: string
  isCommentsActive: boolean
  onToggleComments: () => void
}

function BlogPostCard({ post, buttonClass, isCommentsActive, onToggleComments }: BlogPostCardProps) {
  return (
    <div className="flex flex-col">
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
          <ReactMarkdown className="mb-4 prose dark:prose-invert max-w-none">
            {post.description}
          </ReactMarkdown>
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
            isActive={isCommentsActive}
            onToggle={onToggleComments}
          />
        </CardFooter>
      </Card>
      {isCommentsActive && (
        <Card className="mt-4 w-full">
          <CardContent>
            <CommentSection postId={post.slug} />
          </CardContent>
        </Card>
      )}
    </div>
  )
}
