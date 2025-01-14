"use client"

import { motion } from "framer-motion"
import { projectsData } from "@/data/projects"
import { ProjectCard } from "../Home Page/Portfolio Section/ProjectCard"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Code, Paintbrush, Rocket, Server, Globe, Zap, Database, Layout } from 'lucide-react'

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
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <main className="container mx-auto px-4 py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
          My Portfolio
        </h1>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800 dark:text-gray-100">
            Featured Projects
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore some of my recent projects, showcasing expertise in creating stunning and functional websites across various technologies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projectsData).map(([key, project]) => (
              <ProjectCard key={key} project={project} projectKey={key} />
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-gray-800 dark:text-gray-100">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
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
        </section>
      </main>
    </div>
  )
}
