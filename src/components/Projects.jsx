import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const Projects = () => {
  const proyectos = [
    {
      titulo: 'Busquidy (Página Web)',
      descripcion: 'Plataforma digital que permite generar experiencia e ingresos a estudiantes, además de entregar un espacio seguro y confiable a PYMEs; permite conectar estudiantes con PYMEs en un entorno seguro y confiable (Busquidy).',
      tecnologias: ['React', 'Vite', 'Node.js', 'Express.js', 'Tailwind CSS', 'Cloud SQL'],
      github: 'https://github.com/John-Testx/busquidy_project_1',
      demo: 'https://busquidy-project-1.vercel.app/'
      // En esta tarjeta debemos de hacer varios ajustes en el "Codigo", ya que esto permite solamente ingresar un link de github, este proyecto necesita poder mostrar 3 links de git hub.
      // Información: Plataforma web desplegada en vercel (Front end), railway (backend y fastAPI) y GCP (Base de datos y demas archivos).
    },
    {
      titulo: 'Reporte en Power BI',
      descripcion: 'Generación de reporte para el análisis de datos, automatización de procesos operativos utilizando herramientas predictivas e inteligencia artificial en una empresa ficticia (Transformación Digital).',
      tecnologias: ['Power BI', 'Excel'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
      // Aca deberiamos de dejar algo asi como los botones "No disponible" o algo asi
      // Información: Debido al alcance academico el reporte no se publico.
    },
    {
      titulo: 'Mineria de Datos | Exploración de Datos (EDA)',
      descripcion: 'Exploración, comprensión y limpieza de datos de varios datasets aplicando técnicas predictivas como; Árboles de Desición, Random Forest y Naive Bayes, con Google Colab.',
      tecnologias: ['Python', 'Excel', 'Google Colab'],
      github: 'https://colab.research.google.com/drive/161Pf_CdYg03TG6y1JufN0STnKqjkbGD3?usp=sharing', 
      demo: 'https://demo-proyecto2.com'
      // Aca hay que cambiar al logo de google colab. y Demo borrar o dejar como "No disponible"
      // Información: No se cuenta con una limpieza de datos antigua, lo unico que se pudo dejar es la "IA de recomendación de perfiles" de la plataforma Busquidy
    },
    {
      titulo: 'AppneStatistic (App)',
      descripcion: 'Desarrollo de aplicación móvil para la detección de fenómenos de apnea en bebés con Arduino y sensores.',
      tecnologias: ['Java', 'Firebase', 'Android Studio', 'Arduino', 'C++'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://demo-proyecto2.com'
      // Aca deberiamos de dejar algo asi como los botones "No disponible" o algo asi
      // No se cuenta con el codigo fuente de desarrollo ni la base de datos.
    },
    {
      titulo: 'Rant Drive Legends (Video Juego)',
      descripcion: 'Desarrollo de video juego 2D.',
      tecnologias: ['C++', 'Visual Studio 2019', 'Unity'],
      github: 'https://github.com/tuusuario/proyecto2',
      demo: 'https://drive.google.com/file/d/15xMz__WpWHkEcWxWT0RnA5SLR16wz-6J/view?usp=sharing'
      // Aca hay que cambiar al logo de google colab. y Github borrar o dejar como "No disponible"
      // Información: No se cuenta con el codigo fuente de desarrollo.
    },
    {
      titulo: 'PAEE (Página Web)',
      descripcion: 'Plataforma digital implementada principalmente para facilitar el aprendizaje de los estudiantes de INACAP.',
      tecnologias: ['React App', 'Node.js', 'Express.js', 'CSS', 'Cloud SQL'],
      github: 'https://github.com/tuusuario/proyecto3',
      demo: 'https://demo-proyecto3.com'
      // Aca deberiamos de dejar algo asi como los botones "No disponible" o algo asi
      // Información: No se cuenta con el codigo fuente de desarrollo ni la base de datos.
    },
    {
      titulo: 'Sistema de Gestión de Inventario',
      descripcion: 'Desarrollo de CRUD en terminal para gestionar productos y usuarios de un minimarket (desarrollado en el 2° semestre de estudios).',
      tecnologias: ['Python'],
      github: 'https://github.com/tuusuario/proyecto4',
      demo: 'https://demo-proyecto4.com'
      // Aca deberiamos de dejar algo asi como los botones "No disponible" o algo asi
      // Información:: No se cuenta con el codigo fuente de desarrollo.
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