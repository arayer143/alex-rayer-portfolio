'use client'

import { useRef, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { technologies } from '@/data/technologies'

export function ClientTechScroll() {
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

