import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Alex Rayer | Web Developer',
    template: '%s | Alex Rayer'
  },
  description: 'Alex Rayer is a web developer specializing in creating modern, responsive, and user-friendly websites and applications.',
  keywords: ['Alex Rayer', 'Web Developer', 'Frontend Developer', 'React', 'Next.js'],
  authors: [{ name: 'Alex Rayer' }],
  creator: 'Alex Rayer',
  metadataBase: new URL('https://alexrayer.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alexrayer.com',
    title: 'Alex Rayer | Web Developer',
    description: 'Alex Rayer is a web developer specializing in creating modern, responsive, and user-friendly websites and applications.',
    siteName: 'Alex Rayer Portfolio'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alex Rayer | Web Developer',
    description: 'Alex Rayer is a web developer specializing in creating modern, responsive, and user-friendly websites and applications.',
    creator: '@alexrayer'
  },
  robots: {
    index: true,
    follow: true
  }
}

