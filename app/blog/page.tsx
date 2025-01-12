import { Suspense } from 'react'
import BlogIndexContent from './BlogIndexContent'
import blogPosts from '@/data/blogData'
import LoadingSpinner from '@/components/LoadingSpinner'

export const metadata = {
  title: 'Blog Posts | Alex Rayer',
  description: 'Explore articles on web development, React, Next.js, and more.',
}

export default function BlogIndexPage() {
  const posts = Object.values(blogPosts)
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogIndexContent posts={posts} />
    </Suspense>
  )
}
