"use client"

import { useEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

const Star = ({ size, top, left, delay }: { size: number, top: string, left: string, delay: number }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, delay }
    })
  }, [controls, delay])

  return (
    <motion.div
      className="absolute rounded-full bg-purple-300"
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
          <Star key={i} size={size} top={top} left={left} delay={delay} />
        )
      }
      setStars(newStars)
    }

    createStars()
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-b from-black to-purple-900' : 'bg-gradient-to-b from-gray-900 to-purple-800'}`} />
      {stars}
    </div>
  )
}

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-background text-foreground">
      <SpaceBackground />
      <div className="relative z-10 text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Alex Rayer
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-purple-300"
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
          <Button size="lg" className="bg-purple-600 text-white hover:bg-purple-700">
            View Projects
          </Button>
          <Button size="lg" variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white">
            Contact Me
          </Button>
        </motion.div>
      </div>
    </section>
  )
}