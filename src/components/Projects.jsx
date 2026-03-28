import React, { useState } from 'react'
import { ExternalLink, Github, Info, User, GraduationCap, Layers } from 'lucide-react'
import { SiGooglecolab, SiGoogledrive } from 'react-icons/si'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import ProjectModal from './ProjectModal'

const Projects = () => {
  const { isDark } = useTheme()
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  // 1. Estado para el filtro
  const [filtro, setFiltro] = useState('Todos')

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
      titulo: 'Terapias Esperanza',
      categoria: 'Página Web Publicitaria',
      tipo: 'Personal',
      descripcion: 'Sitio web comercial para un centro de terapias. Incluye sistema de reseñas dinámico y una arquitectura serverless escalable.',
      tecnologias: ['React', 'Vite', 'Supabase', 'Render', 'Tailwind CSS'],
      repositorios: [{nombre: 'Github', url:'https://github.com/usermaen/terapias-web.git'}],
      demo: 'https://terapias-esperanza.vercel.app/', 
      informacion: 'Proyecto desplegado con arquitectura serverless utilizando Supabase para la persistencia de datos y Render para el hosting.',
      estado: '✅ Finalizado'
    },
    {
      titulo: 'Busquidy',
      categoria: 'Página Web',
      tipo: 'Académico',
      descripcion: 'Plataforma digital que permite generar experiencia e ingresos a estudiantes, además de entregar un espacio seguro y confiable a PYMEs.',
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
      tipo: 'Académico',
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
      tipo: 'Académico',
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
      tipo: 'Académico',
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
      tipo: 'Académico',
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
      tipo: 'Académico',
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
      tipo: 'Académico',
      descripcion: 'Desarrollo de CRUD en terminal para gestionar productos y usuarios de un minimarket (desarrollado en el 2° semestre de estudios).',
      tecnologias: ['Python'],
      repositorios: [],
      demo: null,
      informacion: 'No se cuenta con el código fuente de desarrollo.',
      estado: '✅ Completo'
    }
  ]

  // 2. Lógica de filtrado
  const proyectosFiltrados = proyectos.filter(p => 
    filtro === 'Todos' || p.tipo === filtro
  )

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
          className="text-center mb-10"
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Mis <span className="text-cyan-400">Proyectos</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-8"></div>

          {/* 3. Barra de Filtros */}
          <div className="flex justify-center gap-2 mb-12 flex-wrap">
            {['Todos', 'Personal', 'Académico'].map((opcion) => (
              <button
                key={opcion}
                onClick={() => setFiltro(opcion)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  filtro === opcion
                    ? 'bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/30'
                    : isDark
                      ? 'bg-slate-800 text-slate-400 border-slate-700 hover:border-cyan-400'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-cyan-400'
                }`}
              >
                {opcion}
              </button>
            ))}
          </div>
        </motion.div>

        {/* 4. Grilla con AnimatePresence para suavizar el filtrado */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {proyectosFiltrados.map((proyecto, index) => (
              <motion.div
                key={proyecto.titulo}
                layout // Crucial para que el elemento se deslice a su nueva posición
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.4,
                  layout: { duration: 0.3 } // Animación específica para el cambio de posición
                }}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  isDark ? 'bg-slate-800' : 'bg-white'
                }`}
              >
                <div className="p-6">
                  {/* HEADER CON BADGE (CORREGIDO) */}
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {proyecto.tipo === 'Personal' ? (
                          <User size={14} className="text-cyan-400" />
                        ) : (
                          <GraduationCap size={14} className="text-cyan-400" />
                        )}
                        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded ${
                          isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                        }`}>
                          {proyecto.tipo}
                        </span>
                      </div>
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

                  <p className={`mb-4 text-sm ${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  }`}>
                    {proyecto.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proyecto.tecnologias.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs rounded-full ${
                          isDark 
                            ? 'bg-slate-700 text-cyan-400' 
                            : 'bg-cyan-50 text-cyan-600'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* BOTONES DE ACCIÓN */}
                  <div className="flex flex-wrap gap-3">
                    {proyecto.repositorios && proyecto.repositorios.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {proyecto.repositorios.map((repo, i) => (
                          <a
                            key={i}
                            href={repo.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200 text-xs ${
                              isDark 
                                ? 'bg-slate-700 hover:bg-slate-600 text-white' 
                                : 'bg-gray-200 hover:bg-gray-300 text-gray-900'
                            }`}
                          >
                            <Github size={14} />
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
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-xs ${
                          isDark 
                            ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                            : 'bg-orange-500 hover:bg-orange-600 text-white'
                        }`}
                      >
                        <SiGooglecolab size={16} />
                        Colab
                      </a>
                    )}

                    {proyecto.demo && (
                      <a
                        href={proyecto.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 text-xs ${
                          proyecto.demoType === 'drive'
                            ? 'bg-blue-600 hover:bg-blue-700 text-white'
                            : 'bg-cyan-500 hover:bg-cyan-600 text-white'
                        }`}
                      >
                        {proyecto.demoType === 'drive' ? <SiGoogledrive size={16} /> : <ExternalLink size={16} />}
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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