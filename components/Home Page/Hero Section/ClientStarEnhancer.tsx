'use client'

import React, { useEffect } from 'react'
import { useTheme } from 'next-themes'
import styles from './SpaceBackground.module.css'

const ClientStarEnhancer: React.FC = () => {
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const stars = document.querySelectorAll(`.${styles.star}`)
    stars.forEach((star) => {
      star.animate(
        [
          { opacity: 0.3, transform: 'translateY(0px)' },
          { opacity: 1, transform: 'translateY(-2px)' },
          { opacity: 0.3, transform: 'translateY(0px)' },
        ],
        {
          duration: Math.random() * 3000 + 2000,
          iterations: Infinity,
          easing: 'ease-in-out',
        }
      )
    })
  }, [])

  useEffect(() => {
    const currentTheme = theme === 'system' ? systemTheme : theme
    document.body.classList.toggle('light', currentTheme === 'light')
    document.body.classList.toggle('dark', currentTheme === 'dark')
  }, [theme, systemTheme])

  return null
}

export default ClientStarEnhancer

