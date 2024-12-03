"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Code, Paintbrush, Rocket, Server } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AspectRatio } from "@/components/ui/aspect-ratio"

const projects = [
  {
    title: "Clean Slate",
    description: "Modern, responsive website for pressure washing services.",
    image: "/cleanslatelol-whiteBG.jpg",
    link: "/portfolio/clean-slate"
  },
  {
    title: "Pristine Clean",
    description: "Sleek design for professional soft wash services.",
    image: "/pristinecleanlogo.webp",
    link: "/portfolio/pristine-clean"
  },
  {
    title: "OutKast Industrial",
    description: "Robust B2B website for industrial cleaning services.",
    image: "/outkast-logo.webp",
    link: "/portfolio/outkast-industrial"
  },
  {
    title: "RayDunn",
    description: "Portfolio showcasing web development and design.",
    image: "/PNG Transparent Logo.png",
    link: "/portfolio/raydunn"
  }
]

const skills = [
  { name: "React", icon: <Code className="w-5 h-5" />, category: "frontend" },
  { name: "Next.js", icon: <Rocket className="w-5 h-5" />, category: "frontend" },
  { name: "TypeScript", icon: <Code className="w-5 h-5" />, category: "frontend" },
  { name: "Node.js", icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "Express", icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "MongoDB", icon: <Server className="w-5 h-5" />, category: "backend" },
  { name: "UI/UX Design", icon: <Paintbrush className="w-5 h-5" />, category: "design" },
  { name: "Figma", icon: <Paintbrush className="w-5 h-5" />, category: "design" },
]

export default function PortfolioPage() {
  const projectsRef = useRef(null)
  const skillsRef = useRef(null)
  
  const projectsInView = useInView(projectsRef, { once: true, amount: 0.3 })
  const skillsInView = useInView(skillsRef, { once: true, amount: 0.3 })

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
            animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Featured Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-0">
                      <AspectRatio ratio={16 / 9}>
                        <Image
                          src={project.image}
                          alt={`${project.title} project thumbnail`}
                          fill
                          className="object-cover"
                        />
                      </AspectRatio>
                    </CardHeader>
                    <CardContent className="p-4 flex-grow">
                      <CardTitle className="text-lg font-bold mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-sm">{project.description}</CardDescription>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button asChild variant="default" size="sm" className="w-full">
                        <Link href={project.link} className="flex items-center justify-center">
                          View Project
                          <ArrowRight className="ml-2 h-4 w-4" />
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
            animate={skillsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-100">Skills & Expertise</h2>
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-4">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="design">Design</TabsTrigger>
              </TabsList>
              {["all", "frontend", "backend", "design"].map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {skills
                      .filter((skill) => category === "all" || skill.category === category)
                      .map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="p-3 text-base flex items-center justify-center">
                          {skill.icon}
                          <span className="ml-2">{skill.name}</span>
                        </Badge>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </section>
      </main>
    </div>
  )
}

