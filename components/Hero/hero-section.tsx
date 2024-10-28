"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

const Star = ({ size, top, left, delay, isDark }: { size: number, top: string, left: string, delay: number, isDark: boolean }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 0.7, 0],
      scale: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, delay }
    })
  }, [controls, delay])

  return (
    <motion.div
      className={`absolute rounded-full ${isDark ? 'bg-purple-400' : 'bg-blue-800'}`}
      style={{ width: size, height: size, top, left }}
      animate={controls}
    />
  )
}

const SpaceBackground = () => {
  const { resolvedTheme } = useTheme()
  const containerRef = useRef<HTMLDivElement>(null)
  const [stars, setStars] = useState<JSX.Element[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const createStars = () => {
      const newStars = []
      for (let i = 0; i < 100; i++) {
        const size = Math.random() * 2 + 1
        const top = `${Math.random() * 100}%`
        const left = `${Math.random() * 100}%`
        const delay = Math.random() * 5
        newStars.push(
          <Star key={i} size={size} top={top} left={left} delay={delay} isDark={resolvedTheme === 'dark'} />
        )
      }
      setStars(newStars)
    }

    createStars()
  }, [resolvedTheme])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black to-purple-900' : 'bg-gradient-to-b from-blue-100 to-blue-200'}`} />
      {stars}
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <section className={`relative h-[80vh] flex items-center justify-center overflow-hidden ${isDark ? 'bg-background text-foreground' : 'bg-blue-50 text-gray-800'}`}>
      <SpaceBackground />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className={`text-4xl md:text-6xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Alex Rayer
        </motion.h1>
        <motion.p 
          className={`text-lg md:text-xl mb-6 ${isDark ? 'text-purple-300' : 'text-blue-700'}`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer & Designer
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-x-4"
        >
          <Button 
            size="lg" 
            className={isDark ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-blue-600 text-white hover:bg-blue-700"}
          >
            View Projects
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className={isDark ? "border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white" : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"}
          >
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  )
}