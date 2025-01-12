import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/themeprovider'
import Navbar from '@/components/navbar'
import type { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen">
            {children}
          </main>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `}
          </Script>
        </ThemeProvider>
      </body>
    </html>
  )
}
