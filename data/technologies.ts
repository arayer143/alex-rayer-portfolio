import { FaReact, FaNodeJs, FaAws, FaDocker, FaGithub } from 'react-icons/fa'
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiExpress, SiMongodb, SiPostgresql, SiGraphql } from 'react-icons/si'

export const technologies = [
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

