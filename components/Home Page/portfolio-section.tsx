"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: "Clean Slate",
    description: "A modern, responsive website for professional pressure washing services.",
    image: "/cleanslatelol-whiteBG.jpg",
    projectLink: "/portfolio/clean-slate",
    websiteLink: "https://cleanslatepressurewashingnola.com"
  },
  {
    title: "Pristine Clean",
    description: "Showcasing professional soft wash services with a sleek, user-friendly design.",
    image: "/pristinecleanlogo.webp",
    projectLink: "/portfolio/pristine-clean",
    websiteLink: "https://pristinecleansoftwash.com"
  },
  {
    title: "RayDunn",
    description: "A portfolio website showcasing web development and design services.",
    image: "/PNG Transparent Logo.png",
    projectLink: "/portfolio/raydunn",
    websiteLink: "https://raydunnsolutions.com"
  },

  {
    title: "OutKast Industrial",
    description: "A robust website for industrial cleaning services, catering to B2B clients.",
    image: "/outkast-logo.webp",
    projectLink: "/portfolio/outkast-industrial",
    websiteLink: "https://outkastindustrial.com"
  }

]

export default function PortfolioSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">
            Our Portfolio
          </h2>
          <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore some of our recent projects, showcasing our expertise in creating stunning and functional websites.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
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
      </div>
    </section>
  )
}
