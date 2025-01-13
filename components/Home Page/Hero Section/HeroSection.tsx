'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SpaceBackground = dynamic(() => import('./SpaceBackground').then(mod => mod.SpaceBackground), {
  loading: () => <div className="animate-pulse bg-gray-200 h-[60vh] w-full"></div>
})

const HeroContent = dynamic(() => import('./HeroContent').then(mod => mod.HeroContent), {
  loading: () => <div className="animate-pulse bg-gray-200 h-[60vh] w-full"></div>
})

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background text-foreground">
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[60vh] w-full"></div>}>
        <SpaceBackground />
      </Suspense>
      <Suspense fallback={<div className="animate-pulse bg-gray-200 h-[60vh] w-full"></div>}>
        <HeroContent />
      </Suspense>
    </section>
  )
}

