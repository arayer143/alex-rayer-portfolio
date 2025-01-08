import { SpaceBackground } from './SpaceBackground'
import { HeroContent } from './HeroContent'

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background text-foreground">
      <SpaceBackground />
      <HeroContent />
    </section>
  )
}

