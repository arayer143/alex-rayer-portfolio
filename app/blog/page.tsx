import { Suspense } from 'react'
import BlogIndexContent from './BlogIndexContent'
import { getBlogPosts } from '@/lib/getBlogPost'
import LoadingSpinner from '@/components/LoadingSpinner'

export const metadata = {
  title: 'Blog Posts | Alex Rayer',
  description: 'Explore articles on web development, React, Next.js, and more.',
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts()

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogIndexContent posts={posts} />
    </Suspense>
  )
}

