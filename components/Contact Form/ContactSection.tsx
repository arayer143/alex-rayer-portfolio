import React from 'react'
import { ContactForm } from './ContactForm'
import { ContactInfo } from './ContactInfo'

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <ContactInfo />
          </div>
          <div className="lg:w-2/3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
