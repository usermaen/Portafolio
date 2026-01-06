import React from 'react'
import { X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const ProjectModal = ({ isOpen, onClose, proyecto }) => {
  const { isDark } = useTheme()

  if (!proyecto) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-11/12 max-w-2xl ${
              isDark ? 'bg-slate-800' : 'bg-white'
            } rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto`}
          >
            {/* Header del Modal */}
            <div className={`sticky top-0 ${
              isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'
            } border-b p-6 flex justify-between items-start z-10`}>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {proyecto.titulo}
                </h3>
                <p className="text-cyan-400 text-sm mt-1">{proyecto.categoria}</p>
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-lg transition-colors ${
                  isDark 
                    ? 'hover:bg-slate-700 text-slate-400 hover:text-white' 
                    : 'hover:bg-gray-100 text-gray-600 hover:text-gray-900'
                }`}
              >
                <X size={24} />
              </button>
            </div>

            {/* Contenido del Modal */}
            <div className="p-6 space-y-6">
              {/* Descripción */}
              <div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Descripción
                </h4>
                <p className={isDark ? 'text-slate-300' : 'text-gray-700'}>
                  {proyecto.descripcion}
                </p>
              </div>

              {/* Información adicional */}
              {proyecto.informacion && (
                <div>
                  <h4 className={`text-lg font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Información Adicional
                  </h4>
                  <p className={`${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  } italic`}>
                    {proyecto.informacion}
                  </p>
                </div>
              )}

              {/* Tecnologías */}
              <div>
                <h4 className={`text-lg font-semibold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Tecnologías Utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm rounded-full ${
                        isDark 
                          ? 'bg-slate-700 text-cyan-400' 
                          : 'bg-cyan-50 text-cyan-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Estado del proyecto */}
              {proyecto.estado && (
                <div className={`p-4 rounded-lg ${
                  isDark ? 'bg-slate-700' : 'bg-gray-100'
                }`}>
                  <h4 className={`text-sm font-semibold mb-1 ${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    Estado del Proyecto
                  </h4>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    {proyecto.estado}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal