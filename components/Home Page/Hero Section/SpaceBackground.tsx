'use client'

import { useEffect, useState, useMemo } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useTheme } from 'next-themes'

const Star = ({ size, top, left, delay, isDark }: { size: number, top: string, left: string, delay: number, isDark: boolean }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0, 1, 0],
      scale: [0.5, 1, 0.5],
      transition: { duration: Math.random() * 3 + 2, repeat: Infinity, delay }
    })
  }, [controls, delay])

  return (
    <motion.div
      className={`absolute rounded-full ${isDark ? 'bg-white' : 'bg-blue-800'}`}
      style={{ width: size, height: size, top, left }}
      animate={controls}
    />
  )
}

export function SpaceBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const stars = useMemo(() => {
    const newStars = []
    for (let i = 0; i < 200; i++) {
      const size = Math.random() * 3 + 0.5
      const top = `${Math.random() * 100}%`
      const left = `${Math.random() * 100}%`
      const delay = Math.random() * 5
      newStars.push(
        <Star key={i} size={size} top={top} left={left} delay={delay} isDark={resolvedTheme === 'dark'} />
      )
    }
    return newStars
  }, [resolvedTheme])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-radial from-purple-900 via-gray-900 to-black' 
          : 'bg-gradient-radial from-blue-200 via-blue-300 to-blue-400'
      }`} />
      {stars}
      <div className="absolute inset-0 bg-[url('/images/nebula.png')] bg-cover bg-center opacity-20" />
    </div>
  )
}

