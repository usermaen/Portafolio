import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const habilidades = [
    { nombre: 'React', nivel: 95 },
    { nombre: 'JavaScript', nivel: 90 },
    { nombre: 'TypeScript', nivel: 85 },
    { nombre: 'Next.js', nivel: 88 },
    { nombre: 'Tailwind CSS', nivel: 92 },
    { nombre: 'Node.js', nivel: 80 },
    { nombre: 'Git & GitHub', nivel: 90 },
    { nombre: 'REST APIs', nivel: 87 },
    { nombre: 'Redux', nivel: 83 },
    { nombre: 'Figma', nivel: 75 },
  ]

  return (
    <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8">
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
            Habilidades &{' '}
            <span className="text-cyan-400">Tecnologías</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
        </motion.div>

        {/* Grid de habilidades con barras de progreso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {habilidades.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="mb-2 flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-200">
                  {skill.nombre}
                </span>
                <span className="text-sm text-cyan-400">
                  {skill.nivel}%
                </span>
              </div>
              
              {/* Barra de progreso */}
              <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.nivel}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de herramientas adicionales */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Otras Herramientas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['VS Code', 'Postman', 'Docker', 'AWS', 'Jira', 'Slack', 'npm/yarn', 'Webpack'].map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors duration-200 cursor-default"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills