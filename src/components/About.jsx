// src/components/About.jsx
import React from 'react'
import { FileText, Quote, BarChart } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

// IMPORTANTE: Asegúrate de que los nombres coincidan con los archivos reales en tu carpeta assets
import cartaPDF from '../assets/Carta recomendación simple - signed.pdf'
import discImg from '../assets/Test Personalidad DISC.jpg' 

const About = () => {
  const { isDark } = useTheme()

  return (
    <section id="sobre-mi" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-slate-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Sobre <span className="text-cyan-400">Mí</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Tarjeta de Carta de Recomendación */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl shadow-lg relative ${
              isDark ? 'bg-slate-800 hover:shadow-cyan-500/10' : 'bg-white hover:shadow-cyan-500/10'
            } transition-all duration-300`}
          >
            <Quote className="absolute top-6 right-6 text-cyan-400/20" size={60} />
            <h3 className={`text-2xl font-bold mb-6 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              Recomendación Profesional
            </h3>
            
            <div className={`italic mb-8 text-lg relative z-10 ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
              {/* REEMPLAZA ESTE TEXTO CON LA FRASE REAL DE TU JEFA */}
              "Durante su estancia, destacó
por su buen desempeño y compromiso.
Felipe lideró la creación y mantención de varias aplicaciones utilizando Microsoft Power Apps, donde demostró
autogestión, sólido manejo de las herramientas, creatividad y buen trabajo en equipo. Su aporte permitió optimizar
procesos y mejorar la eficiencia del área."
              <span className="block mt-4 text-sm font-semibold text-cyan-400 not-italic">
                - Gabriela Velis, Gerente Senior de Operaciones Clínicas
Laboratorio MSD | MSD Chile
              </span>
            </div>

            <a
              href={cartaPDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 shadow-lg shadow-cyan-500/20 hover:scale-105"
            >
              <FileText size={20} />
              Ver carta de recomendación
            </a>
          </motion.div>

          {/* Tarjeta de Test DISC */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`p-8 rounded-xl shadow-lg flex flex-col justify-center items-center text-center ${
              isDark ? 'bg-slate-800 hover:shadow-cyan-500/10' : 'bg-white hover:shadow-cyan-500/10'
            } transition-all duration-300`}
          >
            <h3 className={`text-2xl font-bold mb-4 flex items-center gap-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <BarChart className="text-cyan-400" size={28} />
              Perfil DISC
            </h3>
            <p className={`mb-6 text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              Mi evaluación de comportamiento profesional y estilos de comunicación en el entorno laboral y trabajo en equipo.
            </p>
            <div className="w-full max-w-xs rounded-lg overflow-hidden border-2 border-cyan-400/20 shadow-md bg-white">
              <img 
                src={discImg} 
                alt="Resultado Test DISC de Felipe" 
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About