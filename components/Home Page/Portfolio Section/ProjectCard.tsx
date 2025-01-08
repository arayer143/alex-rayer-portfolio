'use client'

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink } from 'lucide-react'
import { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  projectKey: string
}

export function ProjectCard({ project, projectKey }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <Card className="overflow-hidden h-full flex flex-col bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="p-0">
          <motion.div 
            className="relative h-48 w-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={project.image}
              alt={`${project.title} project thumbnail`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: "cover" }}
              quality={80}
            />
          </motion.div>
        </CardHeader>
        <CardContent className="p-6 flex-grow">
          <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
            {project.title}
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-300 mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
          <Link 
            href={project.websiteLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-600 hover:text-blue-800 dark:text-purple-400 dark:hover:text-purple-300 inline-flex items-center"
          >
            Visit Website
            <ExternalLink className="ml-1 h-4 w-4" />
          </Link>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button asChild variant="outline" className="w-full">
            <Link href={`/portfolio/${projectKey}`}>
              <span className="flex items-center justify-center">
                Learn More
                <motion.span
                  className="ml-2"
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight className="h-4 w-4" />
                </motion.span>
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
