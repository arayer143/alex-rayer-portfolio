'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useTheme } from 'next-themes'

export function HeroContent() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="relative z-10 text-center px-4">
      <h1 className="sr-only">Alex Rayer - Web Developer & Designer</h1>
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
        <Link href="/portfolio">
          <Button 
            size="lg" 
            className={isDark ? "bg-purple-600 text-white hover:bg-purple-700" : "bg-blue-600 text-white hover:bg-blue-700"}
          >
            View Projects
          </Button>
        </Link>
        <Link href="/contact">
          <Button 
            size="lg" 
            variant="outline" 
            className={isDark ? "border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white" : "border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"}
          >
            Contact Me
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

