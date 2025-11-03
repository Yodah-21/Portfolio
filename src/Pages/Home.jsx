// src/pages/Home.jsx
import Hero from "../components/Hero"
import About from "../Pages/About"         // ensure About returns <section id="about"> ... </section>
import Skills from "../Pages/Skills"       // ensure Skills returns <section id="skills"> ... </section>
import Projects from "../Pages/Projects"   // ensure Projects returns <section id="projects"> ... </section>
import Certificates from "../Pages/Certificates"
import Contact from "../Pages/Contact"     // id="contact"

export default function Home({ theme, toggleTheme }) {
  return (
    <>
      <section id="home"><Hero theme={theme} toggleTheme={toggleTheme} /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
    </>
  )
}
