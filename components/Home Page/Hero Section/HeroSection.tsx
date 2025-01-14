import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import StarBackground from './SpaceBackground'
import ClientStarEnhancer from './ClientStarEnhancer'

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <StarBackground />
      <ClientStarEnhancer />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
          Alex Rayer
        </h1>
        <p className="text-lg md:text-xl mb-6 text-purple-300">
          Web Developer & Designer
        </p>
        <div className="space-x-4">
          <Link href="/portfolio" passHref>
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
              View Projects
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button size="lg" variant="outline" className="border-purple-600 text-purple-300 hover:bg-purple-600 hover:text-white">
              Contact Me
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

