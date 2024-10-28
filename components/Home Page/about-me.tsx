"use client"

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion, useAnimation, useInView } from "framer-motion"
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si'
import { useTheme } from 'next-themes'

const technologies = [
  { name: "React", icon: FaReact, color: "text-blue-500 dark:text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-400" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500 dark:text-yellow-400" },
  { name: "HTML", icon: SiHtml5, color: "text-orange-500 dark:text-orange-400" },
  { name: "CSS", icon: SiCss3, color: "text-blue-500 dark:text-blue-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500 dark:text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-600 dark:text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500 dark:text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600 dark:text-blue-400" },
  { name: "Git", icon: FaGithub, color: "text-gray-800 dark:text-gray-200" },
  { name: "AWS", icon: FaAws, color: "text-orange-500 dark:text-orange-400" },
  { name: "Docker", icon: FaDocker, color: "text-blue-600 dark:text-blue-400" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600 dark:text-pink-400" },
]

const TechScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(scrollRef, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: [0, -1000],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 20,
            ease: "linear",
          },
        },
      })
    }
  }, [isInView, controls])

  return (
    <div className="overflow-hidden py-4" ref={scrollRef}>
      <motion.div
        className="flex space-x-8"
        animate={controls}
        style={{ width: "fit-content" }}
      >
        {[...technologies, ...technologies].map((tech, index) => (
          <div key={index} className="flex flex-col items-center">
            <tech.icon className={`text-4xl ${tech.color}`} />
            <span className="text-sm mt-2 text-gray-700 dark:text-gray-300">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function AboutMe() {
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const isDark = theme === 'dark' || resolvedTheme === 'dark'

  return (
    <section className={`py-16 ${isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-100 to-gray-200'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-8 ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className={`md:col-span-1 ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
            <CardHeader>
              <Avatar className="w-32 h-32 mx-auto">
                <AvatarImage src="/alex-rayer.png" alt="Alex Rayer" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent className="text-center">
              <CardTitle className={`text-2xl ${isDark ? 'text-gray-100' : 'text-gray-800'}`}>Alex Rayer</CardTitle>
              <CardDescription className={isDark ? 'text-gray-400' : 'text-gray-600'}>Web Developer & Designer</CardDescription>
            </CardContent>
          </Card>
          <div className="md:col-span-2">
            <Tabs defaultValue="who" className="w-full">
              <TabsList className={`grid w-full grid-cols-2 ${isDark ? 'bg-gray-700/80' : 'bg-gray-200/80'} backdrop-blur-sm`}>
                <TabsTrigger value="who" className={`${isDark ? 'data-[state=active]:bg-gray-600 data-[state=active]:text-gray-100' : 'data-[state=active]:bg-white data-[state=active]:text-gray-800'}`}>Who I Am</TabsTrigger>
                <TabsTrigger value="what" className={`${isDark ? 'data-[state=active]:bg-gray-600 data-[state=active]:text-gray-100' : 'data-[state=active]:bg-white data-[state=active]:text-gray-800'}`}>What I Do</TabsTrigger>
              </TabsList>
              <TabsContent value="who">
                <Card className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                  <CardHeader>
                    <CardTitle className={isDark ? 'text-gray-100' : 'text-gray-800'}>My Background</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>
                      I'm a passionate web developer with a keen eye for creating elegant, 
                      efficient, and user-friendly solutions. With a strong foundation in both front-end 
                      and back-end technologies, I strive to build applications that not only meet but 
                      exceed client expectations. My journey in web development is driven by a constant 
                      desire to learn and innovate.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="what">
                <Card className={`${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
                  <CardHeader>
                    <CardTitle className={isDark ? 'text-gray-100' : 'text-gray-800'}>My Expertise</CardTitle>
                    <CardDescription className={isDark ? 'text-gray-400' : 'text-gray-600'}>Crafting Digital Experiences</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                      I specialize in crafting responsive web applications, optimizing performance, 
                      and implementing robust backend systems. My approach combines creativity with 
                      technical expertise to deliver outstanding digital experiences.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
        <Card className={`mt-8 ${isDark ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-sm`}>
          <CardHeader>
            <CardTitle className={isDark ? 'text-gray-100' : 'text-gray-800'}>Technologies I Work With</CardTitle>
          </CardHeader>
          <CardContent>
            <TechScroll />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}