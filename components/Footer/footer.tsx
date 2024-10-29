import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Twitter, Linkedin, ArrowRight } from "lucide-react"

export default function Footer() {
  const latestPosts = [
    { title: "Building Scalable React Applications", slug: "building-scalable-react-apps" },
    { title: "Optimizing Node.js Performance", slug: "optimizing-nodejs-performance" },
    { title: "Introduction to GraphQL", slug: "introduction-to-graphql" },
  ]

  return (
    <footer className="border-t bg-background">
      <Card className="m-4">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <CardTitle className="text-2xl font-bold">John Doe</CardTitle>
              <p className="text-muted-foreground max-w-xs mx-auto">
                Full-stack developer passionate about creating innovative web solutions.
              </p>
              <div className="flex justify-center space-x-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 text-white dark:text-gray-200" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5 text-white dark:text-gray-200" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5 text-white dark:text-gray-200" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>

            <Separator className="w-full" />

            <nav>
              <ul className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                {["Home", "Projects", "Blog", "Contact"].map((item) => (
                  <li key={item}>
                    <Button 
                      variant="ghost" 
                      className="text-blue-500 hover:text-blue-600 hover:bg-blue-100 dark:text-purple-400 dark:hover:text-purple-300 dark:hover:bg-purple-900"
                      asChild
                    >
                      <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                    </Button>
                  </li>
                ))}
              </ul>
            </nav>

            <Separator className="w-full" />

            <div className="w-full max-w-md">
              <CardTitle className="text-lg mb-4">Latest Blog Posts</CardTitle>
              <ul className="space-y-2">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <span className="text-sm text-blue-500 dark:text-purple-400">{post.title}</span>
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </Link>
                  </li>
                ))}
              </ul>
              <Button 
                variant="link" 
                className="mt-4 text-blue-500 hover:text-blue-600 dark:text-purple-400 dark:hover:text-purple-300"
                asChild
              >
                <Link href="/blog">View all posts</Link>
              </Button>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-6 space-y-4 sm:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <Button 
              variant="link" 
              className="text-blue-500 hover:text-blue-600 dark:text-purple-400 dark:hover:text-purple-300"
              asChild
            >
              <Link href="/privacy" className="text-sm">
                Privacy Policy
              </Link>
            </Button>
            <Button 
              variant="link" 
              className="text-blue-500 hover:text-blue-600 dark:text-purple-400 dark:hover:text-purple-300"
              asChild
            >
              <Link href="/terms" className="text-sm">
                Terms of Service
              </Link>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </footer>
  )
}