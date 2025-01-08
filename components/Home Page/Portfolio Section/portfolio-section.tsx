import { projectsData } from "@/data/projects"
import { ProjectCard } from "./ProjectCard"

export default function PortfolioSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-gray-100">
          Our Portfolio
        </h2>
        <p className="text-xl text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore some of our recent projects, showcasing our expertise in creating stunning and functional websites across various technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(projectsData).map(([key, project]) => (
            <ProjectCard key={key} project={project} projectKey={key} />
          ))}
        </div>
      </div>
    </section>
  )
}



