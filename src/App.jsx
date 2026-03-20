import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme()

  return (
    <div className={`${
      isDark ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'
    } min-h-screen transition-colors duration-300`}>
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenido principal */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App