import { skills } from "../data/skills"
import SkillCard from "../components/SkillCard"
import SectionTitle from "../components/SectionTitle"

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-20 px-6 
        bg-gray-50 dark:bg-gray-800 
        text-gray-700 dark:text-gray-300 
        transition-colors duration-500
      "
    >
      <SectionTitle
        title="Skills & Technologies"
        subtitle="A comprehensive toolkit for building modern applications"
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((category, i) => (
          <SkillCard key={i} category={category} />
        ))}
      </div>
    </section>
  )
}
