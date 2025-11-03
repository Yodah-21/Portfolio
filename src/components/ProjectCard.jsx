import { ExternalLink, Github } from "lucide-react"

export default function ProjectCard({ project }) {
  return (
    <div className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative overflow-hidden rounded-md mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {project.featured && (
          <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] bg-blue-600 text-white rounded">
            Featured
          </span>
        )}
      </div>

      {/* Title & Description */}
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {project.title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-3">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.technologies.map((tech, i) => (
          <span
            key={i}
            className="inline-flex items-center px-2 py-0.5 text-[11px] border border-gray-300 dark:border-gray-600 rounded text-gray-700 dark:text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex gap-2">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition-colors"
        >
          <ExternalLink className="w-3.5 h-3.5 mr-1" />
          Live Demo
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 text-xs rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <Github className="w-3.5 h-3.5 mr-1" />
          Code
        </a>
      </div>
    </div>
  )
}
