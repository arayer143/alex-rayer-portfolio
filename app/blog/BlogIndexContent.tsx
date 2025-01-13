'use client'

import { useState, useMemo, useCallback, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import ReactMarkdown from 'react-markdown'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, TagIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import Navbar from '@/components/navbar'
import { CommentToggle } from '@/components/comment-toggle'
import { CommentSection } from '@/components/comment-section'
import { BlogPost } from '@/data/blogPosts'

const scrollbarHideClass = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`

interface BlogIndexContentProps {
  posts: BlogPost[]
}

const POSTS_PER_PAGE = 10

export default function BlogIndexContent({ posts }: BlogIndexContentProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [activeComments, setActiveComments] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [mounted, setMounted] = useState(false)
  const [isOverflowing, setIsOverflowing] = useState(false); // Update 1
  const { theme, systemTheme } = useTheme()
  const tabsRef = useRef<HTMLDivElement>(null)

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

  const paginatedPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE
    return filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE)
  }, [filteredPosts, currentPage])

  const buttonClass = useMemo(() => {
    if (!mounted) return ''
    return theme === 'dark' || (theme === 'system' && systemTheme === 'dark')
      ? 'bg-purple-600 hover:bg-purple-700'
      : 'bg-blue-600 hover:bg-blue-700'
  }, [theme, systemTheme, mounted])

  const toggleComments = useCallback((slug: string) => {
    setActiveComments(prevActive => prevActive === slug ? null : slug)
  }, [])

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category)
    setCurrentPage(1)
  }, [])

  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabsRef.current) {
      const scrollAmount = tabsRef.current.offsetWidth / 2
      tabsRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }

  const checkForOverflow = useCallback(() => { // Update 2
    if (tabsRef.current) {
      const { scrollWidth, clientWidth } = tabsRef.current;
      setIsOverflowing(scrollWidth > clientWidth);
    }
  }, []);

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => { // Update 5
    if (mounted && tabsRef.current) {
      const activeTab = tabsRef.current.querySelector(`[data-category="${selectedCategory}"]`)
      if (activeTab) {
        const tabsRect = tabsRef.current.getBoundingClientRect()
        const activeTabRect = activeTab.getBoundingClientRect()
        const scrollLeft = activeTabRect.left - tabsRect.left + tabsRef.current.scrollLeft - (tabsRect.width / 2) + (activeTabRect.width / 2)
        tabsRef.current.scrollTo({ left: scrollLeft, behavior: 'smooth' })
      }
      checkForOverflow();
    }
  }, [selectedCategory, mounted, checkForOverflow]);

  useEffect(() => { // Update 3
    if (mounted && tabsRef.current) {
      checkForOverflow();
      const resizeObserver = new ResizeObserver(checkForOverflow);
      resizeObserver.observe(tabsRef.current);
      return () => resizeObserver.disconnect();
    }
  }, [mounted, checkForOverflow]);

  if (!mounted) {
    return null // or a loading spinner
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <style>{scrollbarHideClass}</style>
      <Navbar />
      <h1 className="text-4xl font-bold mb-8 text-center">Blog Posts</h1>
      <div className="relative mb-6">
        {isOverflowing && ( // Update 4
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => scrollTabs('left')}
              className="bg-white dark:bg-gray-800 shadow-md rounded-full p-2"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </Button>
          </div>
        )}
        <div 
          ref={tabsRef} 
          className="flex overflow-x-auto scrollbar-hide space-x-2 py-2 px-10"
          style={{ scrollBehavior: 'smooth' }}
        >
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => handleCategoryChange(category)}
              className="whitespace-nowrap"
              data-category={category}
            >
              {category}
            </Button>
          ))}
        </div>
        {isOverflowing && ( // Update 4
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => scrollTabs('right')}
              className="bg-white dark:bg-gray-800 shadow-md rounded-full p-2"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </Button>
          </div>
        )}
      </div>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
        {paginatedPosts.map((post) => (
          <BlogPostCard 
            key={post.slug}
            post={post}
            buttonClass={buttonClass}
            isCommentsActive={activeComments === post.slug}
            onToggleComments={() => toggleComments(post.slug)}
          />
        ))}
      </div>
      {filteredPosts.length > POSTS_PER_PAGE && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="mr-2"
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, Math.ceil(filteredPosts.length / POSTS_PER_PAGE)))}
            disabled={currentPage === Math.ceil(filteredPosts.length / POSTS_PER_PAGE)}
          >
            Next
          </Button>
        </div>
      )}
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

