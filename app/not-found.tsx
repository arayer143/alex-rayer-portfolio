'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from 'next/link'
import { AlertCircle } from 'lucide-react'

export default function NotFound() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const buttonClass = theme === 'dark' ? 'bg-purple-600 hover:bg-purple-700' : 'bg-blue-600 hover:bg-blue-700'

  return (
    <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardContent className="pt-6 text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle className="w-24 h-24 mx-auto text-yellow-500 mb-6" />
          </motion.div>
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            404 - Page Not Found
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Oops! The blog post you're looking for seems to have wandered off.
          </motion.p>
        </CardContent>
        <CardFooter className="justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Button asChild className={buttonClass}>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </motion.div>
        </CardFooter>
      </Card>
    </div>
  )
}