import React, { useState, useEffect } from 'react'
import heroImg from '../img/hero.jpg'

const technologies = ['HTML', 'CSS', 'Tailwind CSS', 'JavaScript', 'React', 'Vue', 'Git', 'Docker', 'AI-Powered Dev', 'Kilo', 'OpenCode']

const codeSnippets = [
  '<div>', '</>', '{...}', 'const', '=> {}', 'import', 'export', 'return',
  '<App />', 'npm', 'git', 'docker', 'async', 'await', '.map()', 'useState',
  'AI 🤖', 'Kilo', 'OpenCode', 'Prompt', 'Generate', 'Debug 🐛',
]

export default function Hero({ darkMode, cv }) {
  const [currentTech, setCurrentTech] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const tech = technologies[currentTech]
    let timeout

    if (!isDeleting) {
      if (displayText.length < tech.length) {
        timeout = setTimeout(() => {
          setDisplayText(tech.slice(0, displayText.length + 1))
        }, 80)
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 1500)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1))
        }, 40)
      } else {
        setIsDeleting(false)
        setCurrentTech((prev) => (prev + 1) % technologies.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentTech])

  return (
    <section
      id="home"
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
        darkMode ? 'bg-bg-dark' : 'bg-gradient-to-br from-slate-50 via-white to-cyan-50'
      }`}
    >
      <div className={`absolute inset-0 transition-opacity duration-700 ${
        darkMode ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-dark to-bg-dark" />
      </div>

      {codeSnippets.map((snippet, i) => (
        <div
          key={i}
          className={`absolute select-none z-10 ${
            darkMode ? 'floating-code' : 'text-dark-600/10 font-mono text-sm'
          }`}
          style={{
            left: `${(i * 17 + 5) % 90}%`,
            top: `${(i * 23 + 10) % 80}%`,
            animationDelay: `${i * 0.8}s`,
            animationDuration: `${6 + (i % 4) * 2}s`,
            fontSize: `${12 + (i % 3) * 4}px`,
          }}
        >
          {snippet}
        </div>
      ))}

      <div className={`absolute top-1/4 left-10 w-72 h-72 rounded-full blur-3xl animate-float z-10 ${
        darkMode ? 'bg-dark-600/20' : 'bg-cyan-200/30'
      }`} />
      <div className={`absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl animate-float-delayed z-10 ${
        darkMode ? 'bg-mint/10' : 'bg-cyan-300/20'
      }`} />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <div className={`relative w-40 h-40 sm:w-52 sm:h-52 mx-auto mb-8 rounded-full overflow-hidden ${
            darkMode ? 'neon-border' : 'ring-4 ring-cyan-400/40 shadow-xl shadow-cyan-200/50'
          }`}>
            <img
              src={heroImg}
              alt="Affan Ghouri"
              className="w-full h-full object-cover"
            />
          </div>

          <p className={`text-sm sm:text-base tracking-widest uppercase mb-4 ${
            darkMode ? 'text-mint' : 'text-cyan-600'
          }`}>
            Welcome to my portfolio
          </p>

          <h1 className={`text-4xl sm:text-6xl lg:text-7xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Affan Ghouri
          </h1>

          <h2 className={`text-lg sm:text-xl lg:text-2xl font-medium mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Software Engineer | Frontend & UI/UX Specialist
          </h2>

          <p className={`text-base sm:text-lg max-w-2xl mx-auto mb-8 ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Crafting the best visual interaction between user and service
          </p>

          <div className={`h-8 mb-10 text-lg sm:text-xl font-mono ${
            darkMode ? 'text-mint' : 'text-cyan-600'
          }`}>
            <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>&gt; </span>
            {displayText}
            <span className="animate-cursor-blink border-r-2 border-current ml-1">&nbsp;</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="btn-neon-filled"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              View My Work
            </a>
            <a
              href={cv}
              download
              className={`btn-neon ${
                !darkMode ? '!border-cyan-500 !text-cyan-600 hover:!bg-cyan-50 hover:!shadow-cyan-300' : ''
              }`}
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <svg
            className={`w-6 h-6 ${darkMode ? 'text-mint' : 'text-cyan-600'}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
