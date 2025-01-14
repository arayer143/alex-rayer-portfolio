'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const SpaceBackground = dynamic(() => import('./SpaceBackground').then(mod => mod.SpaceBackground), {
  loading: () => <LoadingFallback />
})

const HeroContent = dynamic(() => import('./HeroContent').then(mod => mod.HeroContent), {
  loading: () => <LoadingFallback />
})

function LoadingFallback() {
  return <div className="animate-pulse bg-gray-200 dark:bg-gray-700 h-[60vh] w-full"></div>
}

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background text-foreground">
      <Suspense fallback={<LoadingFallback />}>
        <SpaceBackground />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <HeroContent />
      </Suspense>
    </section>
  )
}

