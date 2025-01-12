import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Footer from "@/components/footer"
import { ClientPortfolioSection, ClientContactSection } from './client-components'
import LoadingSpinner from '@/components/LoadingSpinner'

const HeroSection = dynamic(() => import("@/components/Home Page/Hero Section/HeroSection"), {
  loading: () => <LoadingSpinner />
})

const AboutMe = dynamic(() => import("@/components/Home Page/About Me/about-me"), {
  loading: () => <LoadingSpinner />
})

const PortfolioSection = dynamic(() => import("@/components/Home Page/Portfolio Section/portfolio-section"), {
  loading: () => <LoadingSpinner />
})

const ContactSection = dynamic(() => import("@/components/Contact Form/ContactSection").then(mod => mod.ContactSection), {
  loading: () => <LoadingSpinner />
})

export const metadata: Metadata = {
  title: 'Alex Rayer | Web Developer & Designer',
  description: 'Alex Rayer is a full-stack developer specializing in React, Next.js, and modern web technologies. Explore my portfolio and get in touch for your next project.',
  keywords: ['Web Developer', 'Designer', 'React', 'Next.js', 'Full-stack', 'Portfolio'],
  authors: [{ name: 'Alex Rayer' }],
  openGraph: {
    title: 'Alex Rayer | Web Developer & Designer',
    description: 'Explore my portfolio of web development projects and get in touch for your next digital solution.',
    url: 'https://www.alexrayer.com',
    siteName: 'Alex Rayer Portfolio',
    images: [
      {
        url: 'https://www.alexrayer.com/alexrayer-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Alex Rayer Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rayer | Web Developer & Designer',
    description: 'Check out my portfolio for innovative web solutions using cutting-edge technologies.',
    images: [{
      url: 'https://www.alexrayer.com/alexrayer-banner.webp',
      width: 900,
      height: 600,
      alt: 'Alex Rayer Portfolio Preview',
    }],
    creator: '@alexrayer',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function Home() {
  return (
    <div className="flex-col min-h-screen">
      <main className="flex-grow">
        <section className="w-full bg-gray-100 dark:bg-gray-800">
          <HeroSection />
          <AboutMe />
          <ClientPortfolioSection />
          <ClientContactSection />
        </section>
      </main>
      <Footer />
    </div>
  )
}
