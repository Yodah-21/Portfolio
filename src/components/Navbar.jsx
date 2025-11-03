// src/components/Navbar.jsx
import { useState, useEffect } from "react"
import ThemeToggle from "./ThemeToggle"
import { navLinks } from "../data/navLinks"
import { Menu, X } from "lucide-react"

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (href) => {
    setOpen(false)
    if (href.startsWith("#")) {
      const id = href.slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: "smooth" })
      history.replaceState(null, "", href)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between transition-all">
        {/* Brand */}
        <a
          href="#home"
          onClick={() => handleLinkClick("#home")}
          className="text-2xl font-extrabold text-gray-800 dark:text-white tracking-tight hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          Ashley<span className="text-blue-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l, i) => (
            <li key={i}>
              <a
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleLinkClick(l.href)
                }}
                className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                {l.name}
              </a>
            </li>
          ))}
          <li>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute w-full overflow-hidden bg-white/95 dark:bg-gray-900/95 transition-all duration-500 ${
          open ? "max-h-96 opacity-100 border-t dark:border-gray-700" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 space-y-3">
          {navLinks.map((l, i) => (
            <a
              key={i}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                handleLinkClick(l.href)
              }}
              className="block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
            >
              {l.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
