"use client"
import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"
import Port from "../assets/images/port.jpeg"

export default function About() {
  return (
    <section
      id="about"
      className="py-28 md:py-32 bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-500"
    >
      <SectionTitle
        title="About Me"
        subtitle="Who I am and what I love doing"
      />

      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* About Text (Left) */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p>
            Hi! I'm{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Ashley Mutengwa
            </span>
            , a creative front-end developer with a deep passion for web design
            and clean, maintainable code. I focus on building engaging digital
            experiences using <span className="font-semibold">React</span>, <span className="font-semibold">TailwindCSS</span>, <span className="font-semibold">JavaScript/TypeScript</span>, and modern web tools.
          </p>

          <p>
            I’m driven by <span className="italic">design that feels intuitive</span> and <span className="italic">code that feels elegant</span>. Whether it's a portfolio, dashboard, or landing page, I love crafting smooth user experiences that bring ideas to life.
          </p>

          <p>
            My goal is to create digital experiences that <span className="font-semibold">engage users, solve problems, and deliver results</span>. When I’m not coding, I enjoy exploring UI/UX trends, contributing to open-source projects, and experimenting with creative web animations.
          </p>

          <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
            I’m always excited to collaborate on new projects — let’s build something amazing together!
          </p>

          <div className="pt-2">
            <div className="w-20 h-1 bg-blue-600 dark:bg-blue-500 rounded-full"></div>
          </div>
        </motion.div>

        {/* Wide Image (Right) */}
        <motion.img
          src={Port} 
          alt="Showcase image"
          className="flex-1 w-full h-[390px] md:h-[490px] rounded-xl object-cover shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        />
      </motion.div>
    </section>
  )
}
