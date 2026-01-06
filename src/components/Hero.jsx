import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
// Importa tu foto desde assets
import profilePhoto from '../assets/foto de perfil.jpg' // Cambia el nombre según tu archivo

const Hero = () => {
  const { isDark } = useTheme()

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Foto de Perfil */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex justify-center"
        >
          <div className="relative">
            <img 
              src={profilePhoto} 
              alt="Felipe Quiñehual Monsalve" 
              className="w-40 h-40 rounded-full object-cover border-4 border-cyan-400 shadow-xl shadow-cyan-400/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-blue-500/20"></div>
          </div>
        </motion.div>

        {/* Animación del nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}
        >
          Hola, soy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Felipe Quiñehual Monsalve
          </span>
        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className={`text-xl sm:text-2xl mb-8 ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}
        >
          Titulado en Ingeniería en Informática | Analyst & Developer Specialist
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={`text-lg mb-12 max-w-2xl mx-auto ${
            isDark ? 'text-slate-300' : 'text-gray-700'
          }`}
        >
          Apasionado por la evolución tecnológica y soluciones.
          Interesado en el desarrollo, análisis de datos, infraestructura en la nube y ciberseguridad.
        </motion.p>

        {/* Botones de redes sociales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="https://github.com/usermaen"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-slate-800 hover:bg-cyan-500' 
                : 'bg-gray-200 hover:bg-cyan-500 hover:text-white'
            }`}
          >
            <Github size={24} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/felipe-qui%C3%B1ehual-92487729b/"
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-slate-800 hover:bg-cyan-500' 
                : 'bg-gray-200 hover:bg-cyan-500 hover:text-white'
            }`}
          >
            <Linkedin size={24} />
          </a>
          
          <a 
            href="mailto:felipe172401q@gmail.com"
            className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
              isDark 
                ? 'bg-slate-800 hover:bg-cyan-500' 
                : 'bg-gray-200 hover:bg-cyan-500 hover:text-white'
            }`}
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Indicador de scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16"
        >
          <a href="#experiencia" className="inline-block">
            <div className={`w-6 h-10 border-2 rounded-full p-1 ${
              isDark ? 'border-slate-400' : 'border-gray-400'
            }`}>
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-cyan-400 rounded-full mx-auto"
              />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero