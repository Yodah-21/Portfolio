// src/App.jsx
import { useEffect, useState } from "react"
import MainLayout from "./Layouts/MainLayout"
import Home from "./Pages/Home"

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light")

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"))

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <Home theme={theme} toggleTheme={toggleTheme} />
    </MainLayout>
  )
}
