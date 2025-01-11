"use client"

import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code, Paintbrush, Rocket, Server, Globe, ExternalLink, Zap, Database, Layout } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "RayDunn",
    description: "Portfolio showcasing web development and design services.",
    image: "/PNG Transparent Logo.png",
    projectLink: "/portfolio/raydunn",
    websiteLink: "https://raydunnsolutions.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Clean Slate",
    description: "Modern, responsive website for pressure washing services.",
    image: "/cleanslatelol-whiteBG.webp",
    projectLink: "/portfolio/clean-slate",
    websiteLink: "https://cleanslatepressurewashingnola.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Pristine Clean",
    description: "Sleek design for professional soft wash services.",
    image: "/pristinecleanlogo.webp",
    projectLink: "/portfolio/pristine-clean",
    websiteLink: "https://pristinecleansoftwash.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "OutKast Industrial",
    description: "Website for industrial cleaning services.",
    image: "/outkast-logo.webp",
    projectLink: "/portfolio/outkast-industrial",
    websiteLink: "https://outkastindustrial.com",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Jessie Boudreaux",
    description: "Turnkey WordPress solution for a social media company.",
    image: "/jessie-boudreaux-logo.webp",
    projectLink: "/portfolio/jessie-boudreaux",
    websiteLink: "https://jessieboudreaux.com",
    technologies: ["WordPress", "Custom Theme", "Responsive Design", "SEO Optimization"]
  }
]

const skills = [
  { name: "React", icon: <Code className="w-6 h-6" />, category: "Frontend", color: "bg-blue-500" },
  { name: "Next.js", icon: <Rocket className="w-6 h-6" />, category: "Frontend", color: "bg-black" },
  { name: "TypeScript", icon: <Code className="w-6 h-6" />, category: "Frontend", color: "bg-blue-700" },
  { name: "Tailwind CSS", icon: <Paintbrush className="w-6 h-6" />, category: "Frontend", color: "bg-teal-500" },
  { name: "Node.js", icon: <Server className="w-6 h-6" />, category: "Backend", color: "bg-green-600" },
  { name: "Express", icon: <Zap className="w-6 h-6" />, category: "Backend", color: "bg-gray-600" },
  { name: "MongoDB", icon: <Database className="w-6 h-6" />, category: "Backend", color: "bg-green-500" },
  { name: "UI/UX Design", icon: <Layout className="w-6 h-6" />, category: "Design", color: "bg-purple-500" },
  { name: "Figma", icon: <Paintbrush className="w-6 h-6" />, category: "Design", color: "bg-purple-600" },
  { name: "WordPress", icon: <Globe className="w-6 h-6" />, category: "CMS", color: "bg-blue-400" },
]

export default function PortfolioPage() {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })

  useEffect(() => {
    const timer = setTimeout(() => setShouldAnimate(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Portfolio
        </h1>

        {/* Projects Section */}
        <section ref={projectsRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate && projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={shouldAnimate && projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
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
                          style={{ objectFit: "cover" }}
                          loading="lazy"
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
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100">
                            {tech}
                          </Badge>
                        ))}
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
                    <CardFooter className="p-6 pt-0">
                      <Button asChild variant="outline" className="w-full">
                        <Link href={project.projectLink}>
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
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={shouldAnimate && skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Skills & Expertise</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={shouldAnimate && skillsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <div className={`w-16 h-16 rounded-full ${skill.color} flex items-center justify-center mb-4 text-white transition-transform duration-300 group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold text-center mb-2 text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-center text-gray-600 dark:text-gray-400">
                      {skill.category}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  )
}
