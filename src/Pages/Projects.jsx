import { useRef } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      const scrollAmount = container.clientWidth // scroll by visible width
      if (direction === "left") container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      else container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900"> 
      <SectionTitle
        title="Featured Projects"
        subtitle="A showcase of my recent work and technical capabilities"
        color="text-blue-600 dark:text-white"
      />

      <div className="relative">
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-4"
        >
          {projects.map((project, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[300px] lg:w-[320px]">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -left-2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -right-2 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>
    </section>
  )
}
