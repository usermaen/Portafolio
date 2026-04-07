import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Curriculum = () => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    contentRef: componentRef,
    documentTitle: 'CV_Felipe_Quinehual',
  });

// Categorizamos para ahorrar espacio y mejorar la lectura
  const skillCategories = [
    { name: "Lenguajes", skills: "Java, Python, JavaScript, SQL" },
    { name: "Web & Frameworks", skills: "React, Node.js, Vite, Express, Django, HTML5, CSS3, Tailwind, Bootstrap" },
    { name: "Datos & Cloud", skills: "MySQL, SQL Server, MongoDB, Oracle, Firebase, AWS, Google Cloud" },
    { name: "Herramientas", skills: "Power BI, Power Apps, Power Automate, SharePoint, Git, Unity" },
    { name: "Redes & OS", skills: "LAN/WAN, Routing/Switching, Linux (Red Hat), Windows Server" }
  ];

  // Estilo común para todos los títulos de sección
  const sectionHeaderClass = "text-blue-700 font-bold text-base uppercase border-b border-blue-200 mb-3 tracking-wider";

  return (
    <div className="p-8 bg-gray-200 min-h-screen flex flex-col items-center font-sans">
      <button 
        type="button"
        onClick={() => handlePrint()}
        className="mb-6 bg-blue-700 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-blue-800 transition-all cursor-pointer print:hidden"
      >
        🖨️ Generar CV en PDF
      </button>

      <div 
        ref={componentRef} 
        className="bg-white w-[210mm] min-h-[297mm] p-[15mm] shadow-2xl text-slate-800 leading-tight relative overflow-hidden"
      >
        {/* Encabezado Principal */}
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-slate-900 uppercase tracking-tight">Felipe Andrés Quiñehual Monsalve</h1>
          <p className="text-blue-600 font-semibold text-lg uppercase mb-4">Ingeniero en Informática & Analista Programador</p>
          
          <div className="grid grid-cols-2 gap-y-2 text-[11px] text-slate-600 font-medium border-t border-slate-100 pt-4">
            <div>📧 felipe172401q@gmail.com</div>
            <div>🟢 wsp: https://wa.me/56931997969</div>
            <div>📞 +56931997969</div>
            <div>🔗 linkedin.com/in/felipe-quiñehual-92487729b/</div>
            <div className="col-span-2 text-blue-500">🌐 felipe-quinehual.vercel.app</div>
          </div>
        </header>

        {/* Antecedentes Personales */}
        <section className="mb-6">
          <h2 className={sectionHeaderClass}>Antecedentes Personales</h2>
          <div className="grid grid-cols-4 gap-4 text-[10px] text-slate-700 bg-slate-50 p-3 rounded-md border border-slate-100">
            <div><span className="font-bold uppercase text-slate-500 block mb-1 text-[9px]">Nacimiento</span> 17 de enero de 2004</div>
            <div><span className="font-bold uppercase text-slate-500 block mb-1 text-[9px]">Nacionalidad</span> Chileno</div>
            <div><span className="font-bold uppercase text-slate-500 block mb-1 text-[9px]">Ubicación</span> Santiago, Lo Prado</div>
            <div><span className="font-bold uppercase text-slate-500 block mb-1 text-[9px]">Estado Civil</span> Soltero</div>
          </div>
        </section>

        {/* Resumen Profesional */}
        <section className="mb-6">
          <h2 className={sectionHeaderClass}>Perfil Profesional</h2>
          <p className="text-[11.5px] text-slate-700 text-justify leading-relaxed italic pr-2">
            Profesional enfocado en la mejora de procesos digitales y desarrollo de soluciones escalables. 
            Orientado a la innovación tecnológica y a la entrega de soluciones que impacten directamente 
            en la productividad organizacional. Con experiencia en la migración y automatización de flujos 
            de trabajo críticos combinada con una capacidad probada para transformar procesos manuales en 
            herramientas digitales eficientes.
          </p>
        </section>

        {/* Experiencia */}
        <section className="mb-6">
          <h2 className={sectionHeaderClass}>Experiencia Laboral</h2>
          <div className="relative pl-4 border-l-2 border-blue-50">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold text-slate-800 text-[13px]">Intern - Digital Process Improvement</h3>
              <span className="text-[10px] font-bold text-slate-400 italic">11/2025 — 03/2026</span>
            </div>
            <p className="text-blue-500 text-[11px] font-bold mb-2">Merck Sharp y Dohme (I.A) LLC</p>
            <ul className="list-disc ml-4 text-[11px] space-y-1.5 text-slate-700">
              <li>Lideré la transición de flujos de trabajo basados en hojas de cálculo hacia un ecosistema digital integrado utilizando Microsoft Power Platform.</li>
              <li>Ejecución de la migración de datos críticos desde Excel a Listas de SharePoint, eliminando caídas del sistema.</li>
              <li>Automatización de procesos mediante flujos en Power Automate para asegurar la sincronización y limpieza de registros.</li>
              <li>Desarrollo de aplicaciones de Low-Code con Power Apps para facilitar la conexión a listas de SharePoint.</li>
              <li>Creación de dashboards dinámicos utilizando Power BI para la visualización de datos en tiempo real.</li>
            </ul>
          </div>
        </section>

        {/* Experiencia Académica / Proyectos */}
        <section className="mb-6">
          <h2 className={sectionHeaderClass}>Experiencia Académica & Proyectos</h2>
          <div className="grid grid-cols-2 gap-x-6 gap-y-3 pl-4">
            
            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Plataforma Busquidy – Proyecto Título</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Full-Stack (Vite, Node, Tailwind). Conexión entre universitarios y PYMES para tareas técnicas.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Exploración de datos (EDA) – IA</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Python en Google Colab. Uso de técnicas predictivas: Árboles de Decisión, Random Forest y Naive Bayes.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Reporte Predictivo – Transformación Digital</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Power BI & Excel. Automatización de proceso operativo utilizando herramientas de IA para reportabilidad.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">App IoT Apnea – Móviles</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Java, Firebase & Arduino (C++). Aplicación para la detección de apnea en bebes integrando sensores.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Sistema Inventario POO – Python</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Python & MySQL. CRUD funcional para gestión de usuarios y productos con vista por consola.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Página Web PAEE – Full-Stack</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">React, Node, Express & Bootstrap. Plataforma de apoyo académico para estudiantes de INACAP.</p>
            </div>

            <div className="border-b border-slate-50 pb-2">
              <h3 className="font-bold text-[11px] text-slate-800 underline decoration-blue-200">Videojuego 2D – Unity</h3>
              <p className="text-[9.5px] text-slate-600 mt-1 leading-snug italic">Desarrollo en Unity y Visual Studio 2019 utilizando C++ y scripts de lógica de juego.</p>
            </div>

          </div>
        </section>

        {/* Educación */}
        <section className="mb-6">
          <h2 className={sectionHeaderClass}>Educación</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-slate-800 text-[12px] uppercase">Analista Programador</h3>
                <p className="text-[11px] text-slate-600 italic">INACAP Santiago Centro</p>
              </div>
              <span className="text-[10px] font-bold text-slate-400">2022 — 2023</span>
            </div>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="font-bold text-slate-800 text-[12px] uppercase">Ingeniería en Informática</h3>
                <p className="text-[11px] text-slate-600 italic">INACAP Santiago Centro</p>
              </div>
              <span className="text-[10px] font-bold text-slate-400">2024 — 2025</span>
            </div>
          </div>
        </section>

        {/* Conocimientos */}
        <section className="mb-4 flex-grow">
          <h2 className={sectionHeaderClass}>Conocimientos Técnicos</h2>
          <div className="space-y-1 pl-2">
            {skillCategories.map((cat, i) => (
              <div key={i} className="text-[9.5px]">
                <span className="font-bold text-blue-800 uppercase mr-2">{cat.name}:</span>
                <span className="text-slate-600">{cat.skills}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Idiomas */}
        <section>
          <h2 className={sectionHeaderClass}>Idiomas</h2>
          <div className="flex gap-12 text-[11px]">
            <div className="flex items-center gap-2">
              <span className="font-bold">Español</span>
              <span className="text-slate-400 text-[9px] uppercase">(Nativo)</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>)}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Inglés</span>
              <span className="text-slate-400 text-[9px] uppercase">(Medio)</span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-blue-500"></div>)}
                {[4, 5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-slate-200"></div>)}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Curriculum;