import React, { useState } from 'react'
import { ExternalLink, Github, Info } from 'lucide-react'
import { SiGooglecolab, SiGoogledrive } from 'react-icons/si'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const { isDark } = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (proyecto) => {
    setSelectedProject(proyecto)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setTimeout(() => setSelectedProject(null), 300)
  }

  const proyectos = [
    {
      titulo: 'Busquidy',
      categoria: 'Página Web',
      descripcion: 'Plataforma digital que permite generar experiencia e ingresos a estudiantes, además de entregar un espacio seguro y confiable a PYMEs; permite conectar estudiantes con PYMEs en un entorno seguro y confiable.',
      tecnologias: ['React', 'Vite', 'Node.js', 'Express.js', 'Tailwind CSS', 'Cloud SQL'],
      repositorios: [
        { nombre: 'Frontend', url: 'https://github.com/John-Testx/busquidy_project_1' },
        { nombre: 'Backend', url: 'https://github.com/John-Testx/busquidy_project_backend' },
        { nombre: 'FastAPI', url: 'https://github.com/John-Testx/Server-FastAPI-AI_reccomendation_pricing' }
      ],
      demo: 'https://busquidy-project-1.vercel.app/',
      informacion: 'Plataforma web desplegada en Vercel (Frontend), Railway (Backend y FastAPI) y GCP (Base de datos).',
      estado: '⚠️ Incompleto, desplegado'
    },
    {
      titulo: 'Reporte en Power BI',
      categoria: 'Business Intelligence',
      descripcion: 'Generación de reporte para el análisis de datos, automatización de procesos operativos utilizando herramientas predictivas e inteligencia artificial en una empresa ficticia.',
      tecnologias: ['Power BI', 'Excel'],
      repositorios: [],
      demo: null,
      informacion: 'Debido al alcance académico, el reporte no fue publicado.',
      estado: '✅ Completo, no se publico en Power BI Service'
    },
    {
      titulo: 'Minería de Datos | EDA',
      categoria: 'Data Science',
      descripcion: 'Exploración, comprensión y limpieza de datos de varios datasets aplicando técnicas predictivas como Árboles de Decisión, Random Forest y Naive Bayes.',
      tecnologias: ['Python', 'Excel', 'Google Colab'],
      repositorios: [],
      colabUrl: 'https://colab.research.google.com/drive/161Pf_CdYg03TG6y1JufN0STnKqjkbGD3?usp=sharing',
      demo: null,
      informacion: 'No se cuenta con proyectos de limpieza de datos antiguos. Lo único disponible es la IA de recomendación de perfiles de la plataforma Busquidy.',
      estado: '✅ Completo |📓 Notebook en Google Colab'
    },
    {
      titulo: 'AppneStatistic',
      categoria: 'App Móvil',
      descripcion: 'Desarrollo de aplicación móvil para la detección de fenómenos de apnea en bebés con Arduino y sensores.',
      tecnologias: ['Java', 'Firebase', 'Android Studio', 'Arduino', 'C++'],
      repositorios: [],
      demo: null,
      informacion: 'No se cuenta con el código fuente de desarrollo ni la base de datos.',
      estado: '⚠️ Incompleto, Base de datos en la nube'
    },
    {
      titulo: 'Rant Drive Legends',
      categoria: 'Videojuego',
      descripcion: 'Desarrollo de videojuego 2D.',
      tecnologias: ['C++', 'Visual Studio 2019', 'Unity'],
      repositorios: [],
      demo: 'https://drive.google.com/file/d/15xMz__WpWHkEcWxWT0RnA5SLR16wz-6J/view?usp=sharing',
      demoType: 'drive',
      informacion: 'No se cuenta con el código fuente de desarrollo.',
      estado: '⚠️ Incompleto'
    },
    {
      titulo: 'PAEE',
      categoria: 'Página Web',
      descripcion: 'Plataforma digital implementada principalmente para facilitar el aprendizaje de los estudiantes de INACAP.',
      tecnologias: ['React App', 'Node.js', 'Express.js', 'CSS', 'Cloud SQL'],
      repositorios: [],
      demo: null,
      informacion: 'No se cuenta con el código fuente de desarrollo ni la base de datos.',
      estado: '⚠️ Incompleto, Base de datos en la nube'
    },
    {
      titulo: 'Sistema de Gestión de Inventario',
      categoria: 'Aplicación de Terminal',
      descripcion: 'Desarrollo de CRUD en terminal para gestionar productos y usuarios de un minimarket (desarrollado en el 2° semestre de estudios).',
      tecnologias: ['Python'],
      repositorios: [],
      demo: null,
      informacion: 'No se cuenta con el código fuente de desarrollo.',
      estado: '✅ Completo'
    }
  ]

  return (
    <section id="proyectos" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-slate-900' : 'bg-gray-100'
    }`}>
      <div className="max-w-6xl mx-auto">
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
            Proyectos{' '}
            <span className="text-cyan-400">Académicos</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`rounded-lg overflow-hidden shadow-lg transition-all duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:shadow-cyan-500/20' 
                  : 'bg-white hover:shadow-cyan-500/10'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={`text-2xl font-bold ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {proyecto.titulo}
                    </h3>
                    <p className="text-cyan-400 text-sm">{proyecto.categoria}</p>
                  </div>
                  <button
                    onClick={() => openModal(proyecto)}
                    className={`p-2 rounded-lg transition-colors ${
                      isDark 
                        ? 'hover:bg-slate-700 text-cyan-400' 
                        : 'hover:bg-gray-100 text-cyan-600'
                    }`}
                    title="Ver más información"
                  >
                    <Info size={20} />
                  </button>
                </div>

                <p className={`mb-4 ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  {proyecto.descripcion}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
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

                <div className="flex flex-wrap gap-3">
                  {proyecto.repositorios && proyecto.repositorios.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {proyecto.repositorios.map((repo, i) => (
                        <a
                          key={i}
                          href={repo.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 text-sm ${
                            isDark 
                              ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                              : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                          }`}
                        >
                          <Github size={16} />
                          {repo.nombre}
                        </a>
                      ))}
                    </div>
                  )}

                  {proyecto.colabUrl && (
                    <a
                      href={proyecto.colabUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        isDark 
                          ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      <SiGooglecolab size={18} />
                      Colab
                    </a>
                  )}

                  {proyecto.demo && proyecto.demoType === 'drive' ? (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
                        isDark 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                          : 'bg-blue-500 hover:bg-blue-600 text-white'
                      }`}
                    >
                      <SiGoogledrive size={18} />
                      Drive
                    </a>
                  ) : proyecto.demo ? (
                    <a
                      href={proyecto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  ) : null}

                  {!proyecto.demo && !proyecto.colabUrl && proyecto.repositorios.length === 0 && (
                    <span className={`px-4 py-2 rounded-lg text-sm ${
                      isDark 
                        ? 'bg-slate-700 text-slate-400' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      No disponible
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        proyecto={selectedProject} 
      />
    </section>
  )
}

export default Projects