import blogPosts from '@/data/blogData'
import { BlogPost } from '@/types/blog'

export async function getBlogPost(slug: string): Promise<BlogPost> {
  // Simulate a delay to mimic a database or API call
  await new Promise(resolve => setTimeout(resolve, 100))

  const post = blogPosts[slug]

  if (!post) {
    throw new Error(`Blog post not found: ${slug}`)
  }

  return post
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Simulate a delay to mimic a database or API call
  await new Promise(resolve => setTimeout(resolve, 100))

  return Object.values(blogPosts)
}

