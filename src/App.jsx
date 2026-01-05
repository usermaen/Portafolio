import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navbar fijo en la parte superior */}
      <Navbar />
      
      {/* Contenido principal */}
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App