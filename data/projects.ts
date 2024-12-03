export interface Project {
    title: string;
    description: string;
    fullDescription: string;
    image: string;
    websiteLink: string;
    technologies: string[];
    features: string[];
  }
  
  export type ProjectsData = {
    [key: string]: Project;
  };
  
  export const projectsData: ProjectsData = {
    'clean-slate': {
      title: 'Clean Slate Pressure Washing',
      description: 'A modern, responsive website for professional pressure washing services.',
      fullDescription: 'Clean Slate Pressure Washing is a comprehensive web solution designed for a professional pressure washing service. The website showcases the company\'s services, pricing, and before-and-after gallery to effectively demonstrate the quality of their work. Built with cutting-edge technologies, it offers a seamless user experience across all devices.',
      image: '/cleanslatelol-whiteBG.jpg',
      websiteLink: 'https://cleanslate.com',
      technologies: [
        'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion',
        'Three.js', 'React Three Fiber', 'Embla Carousel', 'React Hook Form', 'Zod',
        'next-themes'
      ],
      features: [
        'Responsive design optimized for all device sizes',
        'Interactive 3D models of cleaning equipment using Three.js',
        'Dynamic image carousels showcasing before-and-after results',
        'Dark mode support for improved user experience',
        'Animated page transitions and micro-interactions with Framer Motion',
        'Form validation and handling with React Hook Form and Zod',
        'SEO optimization leveraging Next.js features',
        'Accessibility enhancements using shadcn/ui components'
      ]
    },
    'pristine-clean': {
      title: 'Pristine Clean',
      description: 'Showcasing professional soft wash services with a sleek, user-friendly design.',
      fullDescription: 'Pristine Clean\'s website is tailored for a soft wash service provider, emphasizing their gentle yet effective cleaning methods. The design focuses on conveying a sense of cleanliness and attention to detail.',
      image: '/pristinecleanlogo.webp',
      websiteLink: 'https://pristinecleansoftwash.com',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Sass'],
      features: [
        'Custom animations to showcase cleaning process',
        'Blog section for sharing cleaning tips and advice',
        'Online quote request form',
        'Integration with scheduling software',
        'Customer portal for managing appointments'
      ]
    },
    'outkast-industrial': {
      title: 'OutKast Industrial',
      description: 'A robust website for industrial cleaning services, catering to B2B clients.',
      fullDescription: 'OutKast Industrial\'s website is designed to cater to B2B clients in need of industrial cleaning services. The site emphasizes the company\'s expertise, safety standards, and advanced cleaning technologies.',
      image: '/outkast-logo.webp',
      websiteLink: 'https://outkastindustrial.com',
      technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Firebase', 'Google Cloud Functions'],
      features: [
        'Detailed service pages with technical specifications',
        'Case studies showcasing past projects',
        'Interactive equipment catalog',
        'Client login area for project tracking',
        'Integration with CRM for lead management'
      ]
    },
    'raydunn': {
      title: 'RayDunn',
      description: 'A portfolio website showcasing web development and design services.',
      fullDescription: 'RayDunn is a personal portfolio website showcasing web development and design services. The site is designed to highlight skills, past projects, and provide an easy way for potential clients to get in touch.',
      image: '/PNG Transparent Logo.png',
      websiteLink: 'https://raydunn.com',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Sanity CMS'],
      features: [
        'Dynamic project showcase with filtering options',
        'Integrated blog for sharing insights and updates',
        'Dark mode toggle for improved user experience',
        'Contact form with email integration',
        'Animated page transitions and micro-interactions'
      ]
    },
  };
  
  