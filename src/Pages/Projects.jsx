import { useRef, useState, useEffect } from "react"
import { projects } from "../data/projects"
import ProjectCard from "../components/ProjectCard"
import SectionTitle from "../components/SectionTitle"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function Projects() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    const container = scrollRef.current
    if (!container) return

    const atStart = container.scrollLeft <= 0
    const atEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 10

    setCanScrollLeft(!atStart)
    setCanScrollRight(!atEnd)
  }

  const scroll = (direction) => {
    const container = scrollRef.current
    if (container) {
      // scroll by one card width now
      const cardWidth = container.firstChild.clientWidth + 16 // +gap-4/px spacing
      if (direction === "left") {
        container.scrollBy({ left: -cardWidth, behavior: "smooth" })
      } else {
        container.scrollBy({ left: cardWidth, behavior: "smooth" })
      }
      setTimeout(checkScrollButtons, 400)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-900"> 
      <SectionTitle
        title="Featured Projects"
        subtitle="A showcase of my recent work and technical capabilities"
        color="text-blue-600 dark:text-white"
      />

      <div className="relative max-w-[400px] md:max-w-[500px] mx-auto">
        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide py-6 w-full"
        >
          {projects.map((project, i) => (
            <div key={i} className="flex-shrink-0 w-full md:w-full p-4">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Scroll Left */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute top-1/2 -left-3 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow disabled:opacity-30"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>

        {/* Scroll Right */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute top-1/2 -right-3 transform -translate-y-1/2 p-2 bg-white dark:bg-gray-800 rounded-full shadow disabled:opacity-30"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6 text-gray-800 dark:text-white" />
        </button>
      </div>
    </section>
  )
}
