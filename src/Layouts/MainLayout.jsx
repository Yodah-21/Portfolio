import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ScrollToTop from "../components/ScrollToTop"

export default function MainLayout({ children, theme, toggleTheme }) {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors">
      
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="flex-grow mt-20">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
