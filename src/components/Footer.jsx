import React from 'react'
import { Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
  const { isDark } = useTheme()
  
  return (
    <footer className={`border-t py-8 px-4 ${
      isDark 
        ? 'bg-slate-900 border-slate-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto text-center">
        <p className={`flex items-center justify-center gap-2 ${
          isDark ? 'text-slate-400' : 'text-gray-600'
        }`}>
          Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> por{' '}
          <span className="text-cyan-400 font-semibold">Felipe Quiñehual Monsalve</span>
        </p>
        <p className={`text-sm mt-2 ${
          isDark ? 'text-slate-500' : 'text-gray-500'
        }`}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer