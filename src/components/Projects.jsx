import React, { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management, secure checkout, and responsive design.',
    tech: ['React', 'Tailwind CSS', 'JavaScript', 'REST APIs'],
    category: 'Web App',
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Dashboard UI Kit',
    description: 'A comprehensive admin dashboard with analytics, charts, and data visualization components.',
    tech: ['Vue.js', 'CSS3', 'JavaScript'],
    category: 'UI/UX',
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description: 'A tool that generates beautiful portfolio websites from JSON configuration files.',
    tech: ['React', 'Tailwind CSS', 'Node.js'],
    category: 'Tool',
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Weather Application',
    description: 'A sleek weather app with location-based forecasts, animated backgrounds, and 7-day predictions.',
    tech: ['React', 'CSS3', 'REST APIs'],
    category: 'Web App',
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 5,
    title: 'Component Library',
    description: 'A reusable component library with accessible, customizable UI components built with Tailwind CSS.',
    tech: ['React', 'Tailwind CSS', 'JavaScript'],
    category: 'UI/UX',
    image: null,
    github: '#',
    live: '#',
  },
  {
    id: 6,
    title: 'Task Management App',
    description: 'A Kanban-style task management application with drag-and-drop, labels, and team collaboration.',
    tech: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    category: 'Web App',
    image: null,
    github: '#',
    live: '#',
  },
]

const categories = ['All', 'Web App', 'UI/UX', 'Tool']

export default function Projects({ darkMode }) {
  const sectionRef = useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`section ${darkMode ? 'bg-bg-dark' : 'bg-white/60 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            A selection of my recent work and personal projects
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12 reveal">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? darkMode
                    ? 'bg-mint text-bg-dark shadow-lg shadow-mint/30'
                    : 'bg-dark-600 text-white shadow-lg shadow-dark-600/30'
                  : darkMode
                    ? 'bg-dark-500/50 text-gray-300 hover:bg-dark-500 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`card group reveal-scale overflow-hidden ${
                darkMode ? '' : 'bg-white'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`relative h-48 rounded-lg mb-4 flex items-center justify-center overflow-hidden ${
                darkMode
                  ? 'bg-gradient-to-br from-dark-500 to-dark'
                  : 'bg-gradient-to-br from-gray-100 to-gray-200'
              }`}>
                <div className="text-center">
                  <div className="text-4xl mb-2">
                    {project.category === 'Web App' ? '🌐' : project.category === 'UI/UX' ? '🎨' : '🔧'}
                  </div>
                  <span className={`text-xs uppercase tracking-wider ${
                    darkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-3">
                  <a
                    href={project.github}
                    className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/20 transition-all"
                  >
                    Code
                  </a>
                  <a
                    href={project.live}
                    className="px-4 py-2 rounded-lg bg-mint/80 text-bg-dark text-sm font-medium hover:bg-mint transition-all"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <h3 className={`text-lg font-bold mb-2 group-hover:text-mint transition-colors ${
                darkMode ? 'text-white' : 'text-dark'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className={`px-2 py-1 rounded text-xs font-medium ${
                      darkMode
                        ? 'bg-dark-600/50 text-mint'
                        : 'bg-gray-100 text-dark-600'
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
