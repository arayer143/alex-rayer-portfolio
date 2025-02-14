import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Github, Linkedin, ArrowRight, Mail } from 'lucide-react'

export default function Footer() {
  const latestPosts = [
    { title: "Key Web Development Skills I've Gained Through My Projects", slug: "skills-learned-through-projects" },
    { title: "Building a REST API Comment Section for Your Portfolio with Next.js and MongoDB", slug: "rest-api-comment-section" },
    { title: "Technologies Used in My Next.js Portfolio Project", slug: "nextjs-portfolio-technologies" },
  ]

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="border-t bg-background">
      <Card className="m-4">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Alex Rayer</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Full-stack developer specializing in React, Next.js, and modern web technologies.
              </p>
              <div className="flex space-x-4">
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="https://github.com/arayer143" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 text-white dark:text-gray-200" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="https://www.linkedin.com/in/alex-rayer/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4 text-white dark:text-gray-200" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-blue-500 hover:bg-blue-600 dark:bg-purple-700 dark:hover:bg-purple-800"
                  asChild
                >
                  <Link href="mailto:alexrayer7@gmail.com">
                    <Mail className="h-4 w-4 text-white dark:text-gray-200" />
                    <span className="sr-only">Email</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Navigation</h3>
              <nav>
                <ul className="space-y-2">
                  {navItems.map((item) => (
                    <li key={item.name}>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300"
                        asChild
                      >
                        <Link href={item.href}>{item.name}</Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Latest Blog Posts</h3>
              <ul className="space-y-3">
                {latestPosts.map((post) => (
                  <li key={post.slug}>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="block p-3 rounded-md border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-purple-500 transition-colors group"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors">
                          {post.title}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-purple-400 transition-colors" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <Button 
                variant="link" 
                className="mt-4 p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-purple-400 dark:hover:text-purple-300"
                asChild
              >
                <Link href="/blog" className="flex items-center">
                  <span className="font-medium">View all posts</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
        <Separator />
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center p-6 space-y-4 sm:space-y-0">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {new Date().getFullYear()} Alex Rayer. All rights reserved.
          </p>
        </CardFooter>
      </Card>
    </footer>
  )
}
