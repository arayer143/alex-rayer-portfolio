import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import BlogPostContent from './BlogPostContent'
import { getBlogPost } from '@/lib/getBlogPost'
import LoadingSpinner from '@/components/LoadingSpinner'
import blogPosts from '@/data/blogData'
import { Metadata } from 'next'

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return { title: 'Post Not Found' }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Alex Rayer'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <BlogPostContent post={post} />
    </Suspense>
  )
}


