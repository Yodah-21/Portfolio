import { motion } from "framer-motion"
import { ArrowDown, Code, Palette, Monitor } from "lucide-react"

export default function Hero({ theme, toggleTheme }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center relative overflow-hidden
                 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 px-6"
    >
      {/* Background Gradient Blobs */}
      <motion.div
        className="absolute w-72 h-72 bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl top-1/3 right-0"
        animate={{ x: [0, -30, 0], y: [0, -40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Icons */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: [0, 20, 0], opacity: 1 }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-24 left-12 text-blue-400 dark:text-blue-300 opacity-20"
      >
        <Code size={50} />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute bottom-32 right-16 text-purple-400 dark:text-purple-300 opacity-20"
      >
        <Palette size={50} />
      </motion.div>

      <motion.div
        initial={{ x: 30, opacity: 0 }}
        animate={{ x: [0, -20, 0], opacity: 1 }}
        transition={{ duration: 7, repeat: Infinity, delay: 2 }}
        className="absolute top-40 right-1/4 text-orange-400 dark:text-orange-300 opacity-20"
      >
        <Monitor size={50} />
      </motion.div>

      {/* Animated Intro */}
      <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
        >
          Hi, I’m{" "}
          <span className="text-black dark:text-white transition-colors duration-500">
            Ashley
          </span>
        </motion.h1>

        <motion.h2
          variants={item}
          className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6"
        >
          Web Developer & Designer
        </motion.h2>

        <motion.p
          variants={item}
          className="max-w-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed"
        >
          I build fast, responsive, and visually appealing web applications using modern technologies
          like React, Tailwind, and Node.js.
        </motion.p>

        {/* Buttons */}
        <motion.div variants={item} className="flex gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition-all"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        className="absolute bottom-10 text-gray-500 dark:text-gray-400"
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  )
}
