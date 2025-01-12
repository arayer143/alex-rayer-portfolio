import blogPosts from '@/data/blogData'
import { BlogPost } from '@/types/blog'

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  // Simulate a delay to mimic a database or API call
  await new Promise(resolve => setTimeout(resolve, 100))

  const post = blogPosts[slug]

  if (post) {
    return post
  }

  return null
}

