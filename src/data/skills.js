// src/data/skills.js
import { Code, Database, Palette, Smartphone } from "lucide-react"

export const skills = [
  {
    title: "Frontend Development",
    icon: Code,
    skillsList: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    color: "text-blue-600",
  },
  {
    title: "Backend Development",
    icon: Database,
    skillsList: ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "text-green-600",
  },
  {
    title: "Design & UI/UX",
    icon: Palette,
    skillsList: ["Figma", "Adobe XD", "Responsive Design", "Prototyping", "User Research"],
    color: "text-purple-600",
  },
  {
    title: "Mobile & Tools",
    icon: Smartphone,
    skillsList: ["React Native", "Git", "Docker", "AWS", "Firebase", "Vercel"],
    color: "text-orange-600",
  },
]
