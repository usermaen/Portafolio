import React, { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Experiencia', href: '#experiencia' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' 
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

          {/* Menu Desktop - CORREGIDO ABAJO */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-cyan-400"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile - CORREGIDO ABAJO */}
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
                className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            
            <a 
              href="/cv.pdf"
              download
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 w-fit"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar