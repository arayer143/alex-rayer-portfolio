"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const projects = [
  {
    title: "Clean Slate",
    description: "A modern, responsive website for professional pressure washing services.",
    image: "/cleanslatelol-whiteBG.jpg",
    link: "/projects/clean-slate"
  },
  {
    title: "Pristine Clean",
    description: "Showcasing professional soft wash services with a sleek, user-friendly design.",
    image: "/pristinecleanlogo.webp",
    link: "/projects/pristine-clean"
  },
  {
    title: "OutKast Industrial",
    description: "A robust website for industrial cleaning services, catering to B2B clients.",
    image: "/outkast-logo.webp",
    link: "/projects/outkast-industrial"
  },
  {
    title: "RayDunn",
    description: "A portfolio website showcasing web development and design services.",
    image: "/PNG Transparent Logo.png",
    link: "/projects/raydunn"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      layout="fill"
                      objectFit="cover"
                    />
                  </motion.div>
                </CardHeader>
                <CardContent className="p-6 flex-grow">
                  <CardTitle className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="default" className="w-full group bg-blue-600 hover:bg-blue-700 dark:bg-purple-600 dark:hover:bg-purple-700 text-white transition-colors duration-300">
                    <Link href={project.link} className="flex items-center justify-center">
                      View Project
                      <motion.span
                        className="ml-2"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
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