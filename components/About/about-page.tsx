'use client'

import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaReact, FaNodeJs, FaGithub as FaGithub2, FaAws } from 'react-icons/fa'
import { 
 SiTypescript, SiJavascript, SiHtml5, SiCss3, 
  SiTailwindcss, SiExpress, SiMongodb, SiGraphql,
  SiGit, SiFigma, SiPostman, SiGoogletagmanager,
  SiWordpress, SiPhp, SiVercel, SiNetlify,
  SiJest, SiVisualstudiocode, SiGoogleanalytics
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandThreejs } from 'react-icons/tb'

const technologies = {
  frontend: [
    { name: "React", icon: FaReact, color: "text-blue-500 dark:text-blue-400" },
    { name: "Next.js", icon: TbBrandNextjs, color: "text-black dark:text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-600 dark:text-blue-400" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500 dark:text-yellow-400" },
    { name: "HTML5", icon: SiHtml5, color: "text-orange-500 dark:text-orange-400" },
    { name: "CSS3", icon: SiCss3, color: "text-blue-500 dark:text-blue-400" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500 dark:text-cyan-400" },
    { name: "Three.js", icon: TbBrandThreejs, color: "text-white dark:text-gray-200" },
    { name: "WordPress", icon: SiWordpress, color: "text-blue-500 dark:text-blue-400" },
  ],
  backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-600 dark:text-green-500" },
    { name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" },
    { name: "PHP", icon: SiPhp, color: "text-purple-500 dark:text-purple-400" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-500 dark:text-green-400" },
    { name: "GraphQL", icon: SiGraphql, color: "text-pink-600 dark:text-pink-400" },
  ],
  testing: [
    { name: "Jest", icon: SiJest, color: "text-red-500 dark:text-red-400" },
  ],
  devops: [
    { name: "Git", icon: SiGit, color: "text-orange-600 dark:text-orange-400" },
    { name: "GitHub", icon: FaGithub2, color: "text-gray-800 dark:text-gray-200" },
    { name: "AWS", icon: FaAws, color: "text-orange-500 dark:text-orange-400" },
    { name: "Vercel", icon: SiVercel, color: "text-black dark:text-white" },
    { name: "Netlify", icon: SiNetlify, color: "text-teal-500 dark:text-teal-400" },
  ],
  tools: [
    { name: "VS Code", icon: SiVisualstudiocode, color: "text-blue-500 dark:text-blue-400" },
    { name: "Figma", icon: SiFigma, color: "text-purple-500 dark:text-purple-400" },
    { name: "Postman", icon: SiPostman, color: "text-orange-500 dark:text-orange-400" },
    { name: "Google Analytics", icon: SiGoogleanalytics, color: "text-yellow-500 dark:text-yellow-400" },
    { name: "Google Tag Manager", icon: SiGoogletagmanager, color: "text-blue-500 dark:text-blue-400" },
  ],
}

export default function AboutPage() {
  const projects = [
    {
      title: "RayDunn Web Solutions",
      description: "A dynamic web development agency platform with a multi-client portal and dashboard system.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Prisma ORM", "NextAuth", "Google Analytics API"]
    },
    {
      title: "Portfolio Website",
      description: "A cutting-edge portfolio website with a full-stack blog system and immersive 3D user interface.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Three.js", "MongoDB", "Framer Motion"]
    },
    {
      title: "Client Dashboard",
      description: "A dynamic, multi-client dashboard system integrating real-time Google Analytics metrics with custom Excel-based payment processing.",
      technologies: ["Next.js", "React", "TypeScript", "Prisma ORM", "Google Analytics API", "Excel parsing"]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8 transition-colors duration-300 dark:bg-gray-900">
      <Card className="mb-8 overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src="/alex-rayer.png" alt="Profile picture" />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold mb-2">Alex Rayer</CardTitle>
            <CardDescription className="text-xl text-blue-100">Full Stack Web Developer</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="text-lg mb-6 leading-relaxed dark:text-gray-300">
            Web Developer with 2+ years of experience in crafting high-performance web applications and data-driven dashboards. Proficient in React, Next.js, TypeScript, and WordPress for front-end development, with strong back-end skills in Node.js, PHP, and MongoDB. Experienced in implementing server-side rendering, static site generation, and API development.
          </p>
          <div className="flex space-x-4">
            <Link href="https://github.com/arayer143" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="icon" 
                className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub Profile</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/alex-rayer/" target="_blank" rel="noopener noreferrer">
              <Button 
                variant="outline" 
                size="icon" 
                className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
              >
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn Profile</span>
              </Button>
            </Link>
            <Link href="mailto:alexrayer7@gmail.com">
              <Button 
                variant="outline" 
                size="icon" 
                className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
              >
                <FaEnvelope className="h-5 w-5" />
                <span className="sr-only">Email Contact</span>
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-8 transition-all duration-300 hover:shadow-md dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Skills & Technologies</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-5 mb-4">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="testing">Testing</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            {Object.entries(technologies).map(([category, techs]) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {techs.map((tech) => (
                    <div key={tech.name} className="flex flex-col items-center justify-center p-4 rounded-lg bg-gray-100 dark:bg-gray-700 transition-all duration-300 hover:shadow-md">
                      <tech.icon className={`text-4xl ${tech.color}`} />
                      <span className="mt-2 text-sm font-medium text-center">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      <Card className="mb-8 transition-all duration-300 hover:shadow-md dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Featured Projects and Features</CardTitle>
          <CardDescription>A selection of my recent work</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="transition-all duration-300 hover:shadow-md dark:bg-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-4 dark:text-gray-300">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="dark:bg-gray-600 dark:text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

