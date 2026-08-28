import { ExternalLink, Github } from "lucide-react"
import proj1Img from "../assets/images/proj1.jpeg";
import omniImg from "../assets/images/omni.png";


export const projects = [
  {
    title: "Omni Contact Site",
    description:
      "A comprehensive contact management system with advanced filtering, search capabilities, and real-time synchronization. Built with modern web technologies for optimal performance.",
    image: omniImg,
    technologies: ["React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Church Community Platform",
    description:
      "Full-featured website for church community management including event scheduling, member directory, donation processing, and live streaming integration.",
    image: proj1Img,
    technologies: ["Next.js", "JavaScript", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    title: "Digital Voucher System",
    description:
      "Interactive voucher management platform allowing businesses to create, distribute, and track promotional vouchers with analytics dashboard.",
    image: "/assets/images/project3.png",
    technologies: ["React", "Firebase", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Smart Tobacco System",
    description:
      "Mobile App for keeping track of the temperature and humidity levels in a tobacco barn during curing season.",
    image: "/assets/images/project4.png",
    technologies: ["Javascript", "React Native", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]
