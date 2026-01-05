import React from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Animación del nombre */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
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
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-slate-400 mb-8"
        >
          Titulado en Ingeniería en Informática | Analyst & Developer Specialist
        </motion.p>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Apasionado por la evolución tecnológica y soluciones.
           Interesado en el desarrollo, análisis de datos, infraestructura en la nube y ciberseguridad.
        </motion.p>

        {/* Botones de redes sociales - CORREGIDOS ABAJO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-4"
        >
          <a 
            href="https://github.com/usermaen"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/felipe-qui%C3%B1ehual-92487729b/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          
          <a 
            href="mailto:felipe172401q@gmail.com"
            className="p-3 bg-slate-800 hover:bg-cyan-500 rounded-full transition-all duration-300 hover:scale-110"
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
            <div className="w-6 h-10 border-2 border-slate-400 rounded-full p-1">
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