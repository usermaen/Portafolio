import React from 'react'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const Education = () => {
  const { isDark } = useTheme()

  const formacion = [
    {
      titulo: 'Ingeniería en Informática',
      institucion: 'INACAP, Chile Santiago Centro',
      tipo: 'Título Profesional',
      periodo: '2024 - 2025',
      descripcion: 'Formación integral en desarrollo de software, bases de datos, redes, y gestión de proyectos tecnológicos.',
      logros: [
        'Titulado con distinción',
        'Proyecto de título enfocado en la deserción juvenil (Busquidy)'
      ]
    },
    {
      titulo: 'Analista Programador',
      institucion: 'INACAP, Chile Santiago Centro',
      tipo: 'Título Técnico',
      periodo: '2022 - 2023',
      descripcion: 'Formación integral en el entendimiento de Hardware y Software, programación, bases de datos y metodologías de trabajo.',
      logros: [
        '...',
      ]
    },
  ]

  return (
    <section id="formacion" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-slate-900' : 'bg-gray-100'
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
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Formación{' '}
            <span className="text-cyan-400">Académica</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Formación Principal */}
        <div className="mb-16">
          {formacion.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`p-8 rounded-xl shadow-lg mb-6 ${
                isDark 
                  ? 'bg-slate-800 hover:shadow-cyan-500/20' 
                  : 'bg-white hover:shadow-cyan-500/10'
              } transition-all duration-300`}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${
                  isDark ? 'bg-slate-700' : 'bg-cyan-50'
                }`}>
                  <GraduationCap className="text-cyan-400" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {edu.titulo}
                  </h3>
                  <p className="text-cyan-400 text-lg">{edu.institucion}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-slate-700 text-slate-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {edu.tipo}
                    </span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-slate-700 text-slate-300' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {edu.periodo}
                    </span>
                  </div>
                </div>
              </div>

              {/* Descripción */}
              <p className={`mb-4 ${
                isDark ? 'text-slate-300' : 'text-gray-700'
              }`}>
                {edu.descripcion}
              </p>

              {/* Logros */}
              {edu.logros && edu.logros.length > 0 && (
                <div>
                  <h4 className={`font-semibold mb-2 flex items-center gap-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    <BookOpen size={18} className="text-cyan-400" />
                    Logros destacados:
                  </h4>
                  <ul className="space-y-2">
                    {edu.logros.map((logro, i) => (
                      <li key={i} className={`flex items-start gap-2 ${
                        isDark ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                        <span>{logro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  )
}

export default Education