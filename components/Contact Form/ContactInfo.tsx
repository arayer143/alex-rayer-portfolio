import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'

export function ContactInfo() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">Contact Me</h3>
      <div className="space-y-4">
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="mailto:alexrayer7@gmail.com">
            <FaEnvelope className="mr-2" />
            Email Me
          </a>
        </Button>
        <Button variant="outline" className="w-full justify-start" asChild>
          <a href="tel:9858692356">
            <FaPhone className="mr-2" />
            Call Me
          </a>
        </Button>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-semibold mb-2">Follow Me</h4>
        <div className="flex space-x-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/arayer143" target="_blank" rel="noopener noreferrer">
              <FaGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://www.linkedin.com/in/alex-rayer/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://x.com/Alex_Rayer_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

