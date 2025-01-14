'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { MobileMenu } from './MobileMenu'

const Navbar = () => {
  const pathname = usePathname()

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialIcons = [
    { name: 'GitHub', icon: Github, href: 'https://github.com' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  ]

  return (
    <>
      <nav className="shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Placeholder div for mobile layout balance */}
            <div className="md:hidden w-8"></div>

            {/* Desktop navigation links - centered */}
            <div className="hidden md:flex flex-grow justify-center">
              <div className="flex items-center space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ease-in-out
                      ${
                        pathname === item.href
                          ? 'bg-blue-100 text-blue-700 dark:bg-purple-900 dark:text-purple-200 border-2 border-blue-500 dark:border-purple-500'
                          : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400'
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social icons, theme toggle, and mobile menu button */}
            <div className="flex items-center space-x-2">
              {/* Social icons - hidden on mobile */}
              <div className="hidden md:flex space-x-4">
                {socialIcons.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-400 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 ease-in-out"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                ))}
              </div>
              
              {/* Theme toggle - visible on all screen sizes */}
              <ThemeToggle />
              
              {/* Mobile menu button - aligned to the right */}
              <div className="md:hidden">
                <MobileMenu navItems={navItems} socialIcons={socialIcons} />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16"></div> {/* Spacer to prevent content from going under the fixed navbar */}
    </>
  )
}

export default Navbar
