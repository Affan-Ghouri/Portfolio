import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const contributions = [
  {
    title: 'UI Component Library',
    description: 'Contributed accessible React components with Tailwind CSS styling.',
    type: 'Feature',
  },
  {
    title: 'Documentation Improvements',
    description: 'Enhanced developer documentation with examples and best practices.',
    type: 'Docs',
  },
  {
    title: 'Bug Fixes & Performance',
    description: 'Resolved rendering issues and improved performance in production builds.',
    type: 'Bug Fix',
  },
  {
    title: 'Design System Tokens',
    description: 'Created a unified design token system for consistent theming.',
    type: 'Feature',
  },
]

export default function OpenSource({ darkMode }) {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="opensource"
      ref={sectionRef}
      className={`section ${darkMode ? 'bg-bg-dark' : 'bg-white/60 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Open Source</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Contributing to the developer community
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className={`card reveal neon-border ${darkMode ? '' : 'bg-white'}`}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 ${
                darkMode
                  ? 'bg-gradient-to-br from-dark-600 to-mint'
                  : 'bg-gradient-to-br from-dark-600 to-mint'
              }`}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-dark'}`}>
                  Open Source Contributor
                </h3>
                <p className={`text-lg mb-1 ${darkMode ? 'text-mint' : 'text-dark-600'}`}>
                  Open Source Community
                </p>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  2022 - Present
                </p>
                <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Actively contributing to open source projects, focusing on frontend tooling,
                  UI component libraries, and developer experience improvements. I believe in
                  giving back to the community that has helped me grow as a developer.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-700/30">
              <h4 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-dark'}`}>
                Key Contributions
              </h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {contributions.map((contrib, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] reveal-scale ${
                      darkMode
                        ? 'bg-dark/50 hover:bg-dark-500/50'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                    style={{ transitionDelay: `${index * 80}ms` }}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h5 className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-dark'}`}>
                        {contrib.title}
                      </h5>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium flex-shrink-0 ml-2 ${
                        darkMode
                          ? 'bg-mint/10 text-mint'
                          : 'bg-dark-600/10 text-dark-600'
                      }`}>
                        {contrib.type}
                      </span>
                    </div>
                    <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      {contrib.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon text-sm"
              >
                View GitHub Profile
              </a>
              <a
                href="#"
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-dark-500/50 text-gray-300 hover:bg-dark-500 hover:text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                View Contributions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
