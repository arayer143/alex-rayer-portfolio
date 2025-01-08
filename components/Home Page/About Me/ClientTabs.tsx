'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, AnimatePresence } from 'framer-motion'

export function ClientTabs() {
  const [activeTab, setActiveTab] = useState('who')

  return (
    <div>
      <div className="flex mb-4">
        <button
          onClick={() => setActiveTab('who')}
          className={`px-4 py-2 ${activeTab === 'who' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} rounded-l-lg transition-colors`}
        >
          Who I Am
        </button>
        <button
          onClick={() => setActiveTab('what')}
          className={`px-4 py-2 ${activeTab === 'what' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'} rounded-r-lg transition-colors`}
        >
          What I Do
        </button>
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'who' ? (
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">My Background</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  I'm a passionate web developer with a keen eye for creating elegant, 
                  efficient, and user-friendly solutions. With a strong foundation in both front-end 
                  and back-end technologies, I strive to build applications that not only meet but 
                  exceed client expectations. My journey in web development is driven by a constant 
                  desire to learn and innovate.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-gray-800 dark:text-gray-100">My Expertise</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">Crafting Digital Experiences</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  I specialize in crafting responsive web applications, optimizing performance, 
                  and implementing robust backend systems. My approach combines creativity with 
                  technical expertise to deliver outstanding digital experiences.
                </p>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
