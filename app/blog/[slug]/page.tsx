import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface BlogPost {
  title: string
  slug: string
  description: string
}

async function getBlogPosts(): Promise<BlogPost[]> {
  // In a real application, fetch this data from your API or database
  return [
    {
      title: "Understanding the Basics of React Hooks",
      slug: "understanding-react-hooks",
      description: "An introduction to React Hooks and how they can simplify your React components."
    },
    // Add more blog posts here
  ]
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}