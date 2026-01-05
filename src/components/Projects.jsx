import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const proyectos = [
    {
      titulo: 'Busquidy',
      descripcion: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración. Desarrollada con React, Redux y Node.js.',
      tecnologias: ['React', 'Vite', 'Node.js', 'Express.js', 'Tailwind CSS', 'Cloud SQL'],
      github: 'https://github.com/John-Testx/busquidy_project_1',
      demo: 'https://busquidy-project-1.vercel.app/'
    },
    {
      titulo: 'Reporte en Power BI',
      descripcion: 'Aplicación de gestión de tareas con funcionalidades de drag & drop, colaboración en tiempo real y notificaciones. Built con React y Firebase.',
      tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
    },
    {
      titulo: 'Mineria de Datos | Exploración de Datos (EDA)',
      descripcion: 'Aplicación de gestión de tareas con funcionalidades de drag & drop, colaboración en tiempo real y notificaciones. Built con React y Firebase.',
      tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
    },
    {
      titulo: 'Desarrollo de Aplicación Móvil',
      descripcion: 'Aplicación de gestión de tareas con funcionalidades de drag & drop, colaboración en tiempo real y notificaciones. Built con React y Firebase.',
      tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
    },
    {
      titulo: 'Desarrollo de Video Juego',
      descripcion: 'Aplicación de gestión de tareas con funcionalidades de drag & drop, colaboración en tiempo real y notificaciones. Built con React y Firebase.',
      tecnologias: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
    },
    {
      titulo: 'PAEE',
      descripcion: 'Plataforma web implementada principalmente para facilitar el aprendizaje de los estudiantes de INACAP.',
      tecnologias: ['React App', 'Node.js', 'Express.js', 'CSS', 'Cloud SQL'],
      github: 'https://github.com/tuusuario/proyecto3',
      demo: 'https://demo-proyecto3.com'
    },
    {
      titulo: 'Sistema de Gestión de Inventario',
      descripcion: 'Desarrollo de CRUD en terminal para getionar prodcutos y usuarios de un minimarket (desarrollado en el 2° semetre de estudios)',
      tecnologias: ['Python'],
      github: 'https://github.com/tuusuario/proyecto4',
      demo: 'https://demo-proyecto4.com'
    }
  ]

  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">
            Proyectos{' '}
            <span className="text-cyan-400">Académicos</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {proyecto.titulo}
                </h3>
                <p className="text-slate-300 mb-4">
                  {proyecto.descripcion}
                </p>

                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {proyecto.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Botones - CORREGIDOS ABAJO */}
                <div className="flex gap-4">
                  <a 
                    href={proyecto.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  
                  <a 
                    href={proyecto.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-200"
                  >
                    <ExternalLink size={18} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects