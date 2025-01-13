'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
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
      <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-800 dark:text-white">
        Alex Rayer
      </h1>
      <p className={`text-lg md:text-xl mb-6 ${isDark ? 'text-purple-300' : 'text-blue-700'}`}>
        Web Developer & Designer
      </p>
      <div className="space-x-4">
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
      </div>
    </div>
  )
}
