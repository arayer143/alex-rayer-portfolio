'use client'

import dynamic from 'next/dynamic'

export const ClientPortfolioSection = dynamic(() => import("@/components/Home Page/Portfolio Section/portfolio-section"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-96 w-full"></div>,
  ssr: false
})


export const ClientContactSection = dynamic(() => import("@/components/Contact Form/ContactSection"), {
  loading: () => <div className="animate-pulse bg-gray-200 h-64 w-full"></div>,
  ssr: false
})

