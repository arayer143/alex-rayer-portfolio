'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiTailwindcss, 
  SiGraphql, 
  SiRedux, 
  SiReactquery, 
  SiFramer, 
  SiWebassembly, 
  SiPwa,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiPython,
  SiDjango,
  SiFastapi,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiMicrosoftazure,
  SiTerraform,
  SiAnsible,
  SiPrometheus,
  SiGrafana
} from "react-icons/si"

export default function AboutPage() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  const skills = {
    frontend: [
      { name: "React", icon: <SiReact className="w-4 h-4 mr-1" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 mr-1" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 mr-1" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 mr-1" /> },
      { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 mr-1" /> },
      { name: "Redux Toolkit", icon: <SiRedux className="w-4 h-4 mr-1" /> },
      { name: "React Query", icon: <SiReactquery className="w-4 h-4 mr-1" /> },
      { name: "Framer Motion", icon: <SiFramer className="w-4 h-4 mr-1" /> },
      { name: "WebAssembly", icon: <SiWebassembly className="w-4 h-4 mr-1" /> },
      { name: "Progressive Web Apps", icon: <SiPwa className="w-4 h-4 mr-1" /> }
    ],
    backend: [
      { name: "Node.js", icon: <SiNodedotjs className="w-4 h-4 mr-1" /> },
      { name: "Express.js", icon: <SiExpress className="w-4 h-4 mr-1" /> },
      { name: "NestJS", icon: <SiNestjs className="w-4 h-4 mr-1" /> },
      { name: "Python", icon: <SiPython className="w-4 h-4 mr-1" /> },
      { name: "Django", icon: <SiDjango className="w-4 h-4 mr-1" /> },
      { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 mr-1" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 mr-1" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 mr-1" /> },
      { name: "Redis", icon: <SiRedis className="w-4 h-4 mr-1" /> },
      { name: "Docker", icon: <SiDocker className="w-4 h-4 mr-1" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-4 h-4 mr-1" /> },
      { name: "Microservices", icon: <SiNodedotjs className="w-4 h-4 mr-1" /> }
    ],
    devops: [
      { name: "CI/CD", icon: <SiDocker className="w-4 h-4 mr-1" /> },
      { name: "AWS", icon: <SiAmazon className="w-4 h-4 mr-1" /> },
      { name: "Azure", icon: <SiMicrosoftazure className="w-4 h-4 mr-1" /> },
      { name: "Terraform", icon: <SiTerraform className="w-4 h-4 mr-1" /> },
      { name: "Ansible", icon: <SiAnsible className="w-4 h-4 mr-1" /> },
      { name: "Prometheus", icon: <SiPrometheus className="w-4 h-4 mr-1" /> },
      { name: "Grafana", icon: <SiGrafana className="w-4 h-4 mr-1" /> }
    ]
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsFormSubmitted(true)
    setTimeout(() => setIsFormSubmitted(false), 3000)
  }

  return (
    <div className="container mx-auto px-4 py-8 transition-colors duration-300 dark:bg-gray-900">
      <Card className="mb-8 overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
        <CardHeader className="flex flex-col sm:flex-row items-center gap-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
          <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
            <AvatarImage src="/alex-rayer.png" alt="Profile picture" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <CardTitle className="text-3xl font-bold mb-2">John Doe</CardTitle>
            <CardDescription className="text-xl text-blue-100">Full Stack Web Developer</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="mt-4">
          <p className="text-lg mb-6 leading-relaxed dark:text-gray-300">
            Passionate full stack developer with 5+ years of experience in building scalable, 
            high-performance web applications. Expertise in modern front-end and back-end 
            technologies, with a strong focus on creating exceptional user experiences.
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mb-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
            >
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub Profile</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
            >
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn Profile</span>
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="transition-all duration-300 hover:scale-110 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
            >
              <FaEnvelope className="h-5 w-5" />
              <span className="sr-only">Email Contact</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="frontend" className="mb-8">
        <TabsList className="grid w-full grid-cols-3 mb-4">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="devops">DevOps</TabsTrigger>
        </TabsList>
        {(Object.keys(skills) as Array<keyof typeof skills>).map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-4">
            <Card className="transition-all duration-300 hover:shadow-md dark:bg-gray-800">
              <CardHeader>
                <CardTitle className="text-2xl font-bold capitalize">{tab} Skills</CardTitle>
                <CardDescription>
                  {tab === "frontend" && "Modern technologies for building interactive UIs"}
                  {tab === "backend" && "Robust technologies for server-side development"}
                  {tab === "devops" && "Tools and practices for efficient deployment and operations"}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {skills[tab].map((skill) => (
                  <Badge 
                    key={skill.name} 
                    variant="secondary"
                    className="transition-all duration-300 hover:scale-105 dark:bg-purple-700 dark:text-white bg-blue-100 text-blue-800 flex items-center"
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      <Card className="transition-all duration-300 hover:shadow-lg dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Get in Touch</CardTitle>
          <CardDescription>I'm always open to new opportunities and collaborations</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Input id="name" placeholder="Your Name" required className="dark:bg-gray-700" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Input id="email" placeholder="Your Email" type="email" required className="dark:bg-gray-700" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Textarea id="message" placeholder="Your Message" required className="dark:bg-gray-700" />
              </div>
            </div>
            <CardFooter className="flex justify-between mt-4 px-0">
              <Button 
                type="reset" 
                variant="outline"
                className="transition-all duration-300 hover:scale-105 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
              >
                Clear
              </Button>
              <Button 
                type="submit"
                className="transition-all duration-300 hover:scale-105 dark:bg-purple-700 dark:text-white dark:hover:bg-purple-600 bg-blue-500 text-white hover:bg-blue-600"
              >
                Send Message
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
      {isFormSubmitted && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg animate-bounce">
          Message sent successfully!
        </div>
      )}
    </div>
  )
}