export interface BlogPost {
    title: string
    slug: string
    description: string
    category: string
    date: string
    content?: string
  }
  
  export const blogPosts: BlogPost[] = [
    {
      title: "Technologies Used in My Next.js Portfolio Project",
      slug: "nextjs-portfolio-technologies",
      description: "An overview of the technologies and libraries used to build my Next.js portfolio website with a MongoDB-powered comment section.",
      category: "Web Development",
      date: "2024-03-15"
    },
    {
      title: "Understanding the Basics of React Hooks",
      slug: "understanding-react-hooks",
      description: "An introduction to React Hooks and how they can simplify your React components.",
      category: "React",
      date: "2023-06-15"
    },
    {
      title: "Building Responsive Layouts with Tailwind CSS",
      slug: "responsive-layouts-tailwind",
      description: "Learn how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
      category: "CSS",
      date: "2023-06-20"
    },
    {
      title: "Getting Started with Next.js 13 and App Router",
      slug: "nextjs-13-app-router",
      description: "Explore the new features and improved performance of Next.js 13's App Router.",
      category: "Next.js",
      date: "2023-06-25"
    },
    {
      title: "Mastering TypeScript: Advanced Types and Techniques",
      slug: "advanced-typescript",
      description: "Dive deep into TypeScript's advanced features to write more robust and maintainable code.",
      category: "TypeScript",
      date: "2023-06-30"
    },
    {
      title: "Building a REST API Comment Section with Next.js and MongoDB",
      slug: "rest-api-comment-section",
      description: "Learn how to create a fully functional comment section using Next.js API routes and MongoDB, with a step-by-step guide on installation and implementation.",
      category: "Web Development",
      date: "2023-07-05"
    },
    {
      title: "Implementing a Secure Client Portal with Next.js and Prisma",
      slug: "secure-client-portal-nextjs-prisma",
      description: "A detailed look at how I built a secure client portal using Next.js, Prisma, and NextAuth.js, integrated with Vercel for seamless deployment.",
      category: "Web Development",
      date: "2024-03-20"
    }
  ]
  