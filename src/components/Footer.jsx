import React from 'react'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          Hecho con <Heart size={16} className="text-red-500" fill="currentColor" /> por{' '}
          <span className="text-cyan-400 font-semibold">Felipe Quiñehual Monsalve</span>
        </p>
        <p className="text-slate-500 text-sm mt-2">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer