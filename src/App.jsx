import React, { useState, useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import OpenSource from './components/OpenSource'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorFollower from './components/CursorFollower'

import darkBg from './img/dark bg.jpg'
import lightBg from './img/light bg.jpg'
import cv from './Affan Ghouri CV.pdf'

function App() {
  const [loading, setLoading] = useState(true)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const handleLoadingComplete = () => {
    setLoading(false)
  }

  if (loading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className={`min-h-screen relative ${
      darkMode ? 'bg-bg-dark text-white' : 'bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-gray-900'
    } transition-colors duration-500`}>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <img
          src={darkBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${darkMode ? 'opacity-20' : 'opacity-0'}`}
        />
        <img
          src={lightBg}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${darkMode ? 'opacity-0' : 'opacity-[0.06]'}`}
        />
        <div className={`absolute inset-0 transition-colors duration-500 ${
          darkMode ? 'bg-bg-dark/50' : 'bg-white/30'
        }`} />
      </div>
      <div className="relative z-10">
        <CursorFollower />
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero darkMode={darkMode} cv={cv} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <OpenSource darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </div>
    </div>
  )
}

export default App
