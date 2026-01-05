import React from 'react'
import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const Experience = () => {
  const experiencias = [
    {
      cargo: 'Intern - Digital Process Improvement',
      empresa: 'MSD',
      periodo: 'Noviembre 2025 - Marzo 2026 (650 horas)',
      descripcion: [
        "Lideré la transición de flujos de trabajo basados en hojas de cálculo hacia un ecosistema digital integrado (Microsoft Power Platform).",
        "Migración de datos críticos desde Excel a Listas de SharePoint, eliminando caídas de sistema por exceso de información.",
        "Automatización de procesos mediante Power Automate para la sincronización y limpieza de registros.",
        "Desarrollo de aplicaciones Low-Code intuitivas para usuarios finales conectadas a SharePoint.",
        "Creación de dashboards dinámicos para la visualización de datos en tiempo real."
      ],
      tecnologias: ["Power Apps", "Power Automate", "SharePoint", "Power BI", "Excel"]
    },
  ]

  return (
    <section id="experiencia" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Experiencia{' '}
            <span className="text-cyan-400">Laboral</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Timeline de experiencias */}
        <div className="relative">
          {/* Línea vertical */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-slate-700"></div>

          {experiencias.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2'
              }`}
            >
              {/* Punto en la línea */}
              <div className="hidden md:block absolute top-6 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-950"></div>

              {/* Contenido de la experiencia */}
              <div className={`bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-shadow duration-300 ${
                index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
              }`}>
                {/* Header con cargo y empresa */}
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="text-cyan-400 flex-shrink-0 mt-1" size={20} />
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white">{exp.cargo}</h3>
                    <p className="text-cyan-400">{exp.empresa}</p>
                  </div>
                </div>

                {/* Periodo */}
                <p className="text-sm text-slate-400 mb-4">{exp.periodo}</p>

                {/* Descripción como lista */}
                <ul className="space-y-2 mb-4">
                  {exp.descripcion.map((item, i) => (
                    <li key={i} className="text-slate-300 flex items-start gap-2">
                      <span className="text-cyan-400 mt-1.5 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tecnologías como badges */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tecnologias.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience