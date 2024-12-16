import { Metadata } from 'next'
import AboutPage from "@/components/About/about-page"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: 'About Alex Rayer | Web Developer & Designer',
  description: 'Learn about Alex Rayer\'s skills in web development, including expertise in React, Next.js, TypeScript, and modern web technologies.',
  openGraph: {
    title: 'About Alex Rayer | Web Developer & Designer',
    description: 'Discover Alex Rayer\'s web development skills and experience.',
    images: [
      {
        url: '/alex-headshot.webp.webp',
        width: 1200,
        height: 630,
        alt: 'Alex Rayer - Web Developer & Designer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Alex Rayer | Web Developer & Designer',
    description: 'Explore Alex Rayer\'s web development skills and projects.',
    images: ['/alex-headshot.webp'],
  },
}

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <AboutPage />
        </section>
      </main>
      <Footer />
    </div>
  )
}

