import React, { useState, useEffect } from 'react'
import { Download, Menu, X, Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
// Importa tu CV desde assets
import cvPDF from '../assets/Felipe Quiñehual  - Curriculum.pdf'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detectar sección activa
      const sections = ['hero', 'experiencia', 'proyectos', 'formacion', 'habilidades']
      const scrollPosition = window.scrollY + 100 // Offset para activar antes
      
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId)
        if (section) {
          const sectionTop = section.offsetTop
          const sectionBottom = sectionTop + section.offsetHeight
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }
    
    handleScroll() // Llamar al inicio
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', href: '#hero', id: 'hero' },
    { name: 'Experiencia', href: '#experiencia', id: 'experiencia' },
    { name: 'Proyectos', href: '#proyectos', id: 'proyectos' },
    { name: 'Formación', href: '#formacion', id: 'formacion' },
    { name: 'Habilidades', href: '#habilidades', id: 'habilidades' },
  ]

  // Función para manejar la descarga del CV
  const handleDownloadCV = (e) => {
    e.preventDefault()
    
    // Descarga desde assets
    const link = document.createElement('a')
    link.href = cvPDF
    link.download = 'CV_Felipe_Quinehual_Monsalve.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? isDark 
            ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg'
            : 'bg-white/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.a
            href="#hero"
            className="text-2xl font-bold text-cyan-400"
            whileHover={{ scale: 1.05 }}
          >
            Portfolio
          </motion.a>

          {/* Menu Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`transition-all duration-200 relative ${
                  activeSection === item.id
                    ? 'text-cyan-400 font-semibold'
                    : isDark 
                      ? 'text-slate-300 hover:text-cyan-400' 
                      : 'text-gray-700 hover:text-cyan-500'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-cyan-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
            
            {/* Toggle de Tema */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700 text-yellow-400' 
                  : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              }`}
              aria-label="Cambiar tema"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            {/* Botón CV - ARREGLADO */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Download size={18} />
              Descargar CV
            </button>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-slate-800 text-yellow-400' 
                  : 'bg-gray-200 text-gray-700'
              }`}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-cyan-500'}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4 space-y-4"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className={`block transition-colors duration-200 ${
                  activeSection === item.id
                    ? 'text-cyan-400 font-semibold'
                    : isDark 
                      ? 'text-slate-300 hover:text-cyan-400' 
                      : 'text-gray-700 hover:text-cyan-500'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            {/* Botón CV en móvil - ARREGLADO */}
            <button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-fit"
            >
              <Download size={18} />
              Descargar CV
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar