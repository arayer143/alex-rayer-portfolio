import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, ExternalLink, Home } from 'lucide-react'
import { projectsData } from '@/data/projects'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projectsData[slug]

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex space-x-4 mb-8">
        <Button variant="outline" asChild>
          <Link href="/" className="inline-flex items-center">
            <Home className="mr-2 h-4 w-4" />
            Home
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/portfolio" className="inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
      <h1 className="sr-only">{project.title} - Project Details</h1>
      <Card className="overflow-hidden">
        <CardHeader className="relative h-[300px] md:h-[400px]">
          <Image
            src={project.image}
            alt={`${project.title} project screenshot`}
            fill
            style={{ objectFit: "contain" }}
            className="rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-8 p-6">
          <div className="md:col-span-2">
            <CardTitle className="text-3xl md:text-4xl font-bold mb-4">{project.title}</CardTitle>
            <CardDescription className="text-lg mb-6">{project.fullDescription}</CardDescription>
            <Button asChild className="mb-8">
              <Link 
                href={project.websiteLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                Visit Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Separator className="my-8" />
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <ArrowLeft className="mr-2 h-4 w-4 mt-1 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">{tech}</Badge>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="bg-muted p-6 flex flex-col items-center justify-center text-center space-y-4">
          <p className="text-sm text-muted-foreground max-w-md">
            For more information or to discuss a similar project, please get in touch.
          </p>
          <Button asChild className="group transition-all duration-300 ease-in-out hover:bg-primary hover:text-primary-foreground">
            <Link href="/contact" className="inline-flex items-center">
              Contact Me
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

