import React from 'react'

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <span className="text-2xl font-bold tracking-tight">
            <span className="text-mint">A</span>
            <span className={darkMode ? 'text-white' : 'text-dark'}>G</span>
          </span>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2.5 rounded-full transition-all duration-500 hover:scale-110 hover:rotate-12 ${
              darkMode
                ? 'bg-white/10 hover:bg-white/20 text-mint hover:shadow-[0_0_15px_rgba(6,182,212,0.5)]'
                : 'bg-dark/10 hover:bg-dark/20 text-dark-600'
            }`}
            aria-label="Toggle dark mode"
          >
            <div className="relative w-5 h-5">
              <svg
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <svg
                className={`absolute inset-0 w-5 h-5 transition-all duration-500 ${
                  darkMode ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  )
}
