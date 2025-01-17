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
            className="relative w-full h-[200px] bg-white dark:bg-gray-900 overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <Image
                src={project.image}
                alt={`${project.title} project thumbnail`}
                width={400}
                height={200}
                className="object-contain w-full h-full"
                priority
              />
            </div>
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
              <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-purple-900 dark:text-purple-100">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-purple-900 dark:text-purple-100">
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-2 p-4">
          <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-purple-400 dark:text-purple-400 dark:hover:bg-purple-500 dark:hover:text-white transition-colors duration-300">
            <Link href={project.websiteLink} target="_blank" rel="noopener noreferrer">
              <span className="flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4" />
                <span className="sr-only">Visit </span>
                {project.title} Site
              </span>
            </Link>
          </Button>
          <Button asChild variant="default" className="w-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 transition-colors duration-300 group">
            <Link href={`/portfolio/${projectKey}`}>
              <span className="flex items-center justify-center">
                {project.title} Details
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
