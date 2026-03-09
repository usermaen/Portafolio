import React from 'react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { Award, Code, Database, Server, Brain, Shield, Languages } from 'lucide-react'

const Skills = () => {
  const { isDark } = useTheme()

  const categorias = [
    {
      titulo: 'Idiomas',
      icono: <Languages className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Español (Nativo)', nivel: 'Avanzado', porcentaje: 100 },
        { nombre: 'Inglés - Reading', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Inglés - Listening', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Inglés - Writing', nivel: 'Básico', porcentaje: 50 },
        { nombre: 'Inglés - Speaking', nivel: 'Básico', porcentaje: 50 }
      ]
    },
    {
      titulo: 'Frontend',
      icono: <Code className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'React & Vite', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'JavaScript/TypeScript', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Tailwind CSS', nivel: 'Básico', porcentaje: 50 },
        { nombre: 'HTML & CSS', nivel: 'Intermedio', porcentaje: 60 }
      ]
    },
    {
      titulo: 'Backend',
      icono: <Server className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Node.js & Express', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Python & FastAPI', nivel: 'Intermedio', porcentaje: 60 },
        { nombre: 'REST APIs', nivel: 'Básico', porcentaje: 55 },
        { nombre: 'Java', nivel: 'Intermedio', porcentaje: 65 }
      ]
    },
    {
      titulo: 'Base de Datos',
      icono: <Database className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Cloud SQL (GCP)', nivel: 'Intermedio', porcentaje: 70 },
        { nombre: 'Firebase', nivel: 'Básico', porcentaje: 50 },
        { nombre: 'SQL', nivel: 'Avanzado', porcentaje: 80 },
        { nombre: 'SharePoint Lists', nivel: 'Avanzado', porcentaje: 80 }
      ]
    },
    {
      titulo: 'Data & BI',
      icono: <Brain className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Power BI', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Power Apps', nivel: 'Avanzado', porcentaje: 80 },
        { nombre: 'Power Automate', nivel: 'Intermedio', porcentaje: 75 },
        { nombre: 'Excel', nivel: 'Intermedio', porcentaje: 72 }
      ]
    },
    {
      titulo: 'Cloud & DevOps',
      icono: <Shield className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Google Cloud Platform', nivel: 'Básico', porcentaje: 58 },
        { nombre: 'Vercel', nivel: 'Intermedio', porcentaje: 60 },
        { nombre: 'Railway', nivel: 'Intermedio', porcentaje: 60 },
        { nombre: 'Git & GitHub', nivel: 'Avanzado', porcentaje: 80 }
      ]
    },
    {
      titulo: 'Otras Tecnologías',
      icono: <Award className="text-cyan-400" size={24} />,
      habilidades: [
        { nombre: 'Arduino & IoT', nivel: 'Básico', porcentaje: 40 },
        { nombre: 'Unity & C++', nivel: 'Básico', porcentaje: 40 },
        { nombre: 'Android Studio', nivel: 'Intermedio', porcentaje: 65 },
        { nombre: 'Google Colab', nivel: 'Intermedio', porcentaje: 72 }
      ]
    }
  ]

  const getNivelColor = (nivel) => {
    switch(nivel) {
      case 'Avanzado':
        return isDark ? 'text-green-400' : 'text-green-600'
      case 'Intermedio':
        return isDark ? 'text-yellow-400' : 'text-yellow-600'
      case 'Básico':
        return isDark ? 'text-orange-400' : 'text-orange-600'
      default:
        return isDark ? 'text-slate-400' : 'text-gray-600'
    }
  }

  const getNivelBgColor = (nivel) => {
    switch(nivel) {
      case 'Avanzado':
        return isDark ? 'bg-green-500/20 border-green-500/30' : 'bg-green-100 border-green-300'
      case 'Intermedio':
        return isDark ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-yellow-100 border-yellow-300'
      case 'Básico':
        return isDark ? 'bg-orange-500/20 border-orange-500/30' : 'bg-orange-100 border-orange-300'
      default:
        return isDark ? 'bg-slate-700 border-slate-600' : 'bg-gray-100 border-gray-300'
    }
  }

  return (
    <section id="habilidades" className={`py-20 px-4 sm:px-6 lg:px-8 ${
      isDark ? 'bg-slate-950' : 'bg-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto">
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
            Habilidades &{' '}
            <span className="text-cyan-400">Tecnologías</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          
          <div className="flex justify-center gap-6 flex-wrap mt-8">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-green-400' : 'bg-green-600'
              }`}></div>
              <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>
                Avanzado (80%+)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-yellow-400' : 'bg-yellow-600'
              }`}></div>
              <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>
                Intermedio (60-79%)
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                isDark ? 'bg-orange-400' : 'bg-orange-600'
              }`}></div>
              <span className={isDark ? 'text-slate-300' : 'text-gray-700'}>
                Básico (50-59%)
              </span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categorias.map((categoria, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className={`p-6 rounded-xl shadow-lg ${
                isDark 
                  ? 'bg-slate-800 hover:shadow-cyan-500/10' 
                  : 'bg-white hover:shadow-cyan-500/10'
              } transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-6">
                {categoria.icono}
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {categoria.titulo}
                </h3>
              </div>

              <div className="space-y-4">
                {categoria.habilidades.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className={`font-medium ${
                        isDark ? 'text-slate-200' : 'text-gray-800'
                      }`}>
                        {skill.nombre}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-full border ${
                        getNivelBgColor(skill.nivel)
                      } ${getNivelColor(skill.nivel)} font-semibold`}>
                        {skill.nivel}
                      </span>
                    </div>
                    
                    <div className={`h-2 rounded-full overflow-hidden ${
                      isDark ? 'bg-slate-700' : 'bg-gray-200'
                    }`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.porcentaje}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: catIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full rounded-full ${
                          skill.porcentaje === 100
                            ? 'bg-gradient-to-r from-blue-400 to-blue-500'
                            : skill.nivel === 'Avanzado' 
                            ? 'bg-gradient-to-r from-green-400 to-green-500' 
                            : skill.nivel === 'Intermedio'
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500'
                            : 'bg-gradient-to-r from-orange-400 to-orange-500'
                        }`}
                      />
                    </div>
                    
                    <div className="flex justify-end mt-1">
                      <span className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        {skill.porcentaje}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`mt-16 p-8 rounded-xl ${
            isDark 
              ? 'bg-slate-800 border border-slate-700' 
              : 'bg-white border border-gray-200'
          }`}
        >
          <h3 className={`text-2xl font-bold mb-6 text-center ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Herramientas & Plataformas
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'VS Code', 'AWS', 'Microsoft Power Platform', 
              'SharePoint', 'Google Cloud Platform', 'Vercel', 
              'Railway', 'Arduino IDE', 'Android Studio', 'Unity',
              'Visual Studio', 'npm/yarn', 'Firebase', 'SQL/No SQL'
            ].map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className={`px-6 py-3 rounded-lg transition-all duration-200 cursor-default ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-slate-600 text-slate-200 hover:shadow-cyan-500/20' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-800 hover:shadow-cyan-500/20'
                } shadow-md`}
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