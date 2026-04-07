import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import Curriculum from './components/Curriculum'
import { useTheme } from './context/ThemeContext'

function App() {
  const { isDark } = useTheme()

  return (
    <Router>
      <div className={`${
        isDark ? 'bg-slate-950 text-slate-100' : 'bg-gray-50 text-gray-900'
      } min-h-screen transition-colors duration-300`}>
        
        <Routes>
          {/* RUTA PRINCIPAL (Portafolio) */}
          <Route path="/" element={
            <>
              <Navbar />
              <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Education />
                <Skills />
              </main>
              <Footer />
            </>
          } />

          {/* RUTA DEL CV (Limpia, sin Navbar del portfolio) */}
          <Route path="/cv" element={<Curriculum />} />
        </Routes>

      </div>
    </Router>
  )
}

export default App