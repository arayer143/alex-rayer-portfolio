'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

interface NavItem {
  name: string
  href: string
}

interface SocialIcon {
  name: string
  icon: React.ElementType
  href: string
}

interface MobileMenuProps {
  navItems: NavItem[]
  socialIcons: SocialIcon[]
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ navItems, socialIcons }) => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-purple-400 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:focus:ring-purple-500"
      >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
          <X className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Menu className="block h-6 w-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md rounded-b-lg overflow-hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ease-in-out ${
                  pathname === item.href
                    ? 'bg-blue-100 text-blue-700 dark:bg-purple-900 dark:text-purple-200 border-l-4 border-blue-500 dark:border-purple-500'
                    : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-purple-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="px-5 py-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-center space-x-6">
              {socialIcons.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors duration-200 ease-in-out"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="h-6 w-6" />
                  <span className="sr-only">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

