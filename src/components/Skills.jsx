import React, { useState, useEffect } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

const skillCategories = [
  {
    title: 'Frontend',
    icon: '󰖟',
    skills: [
      { name: 'HTML5', level: 95, icon: '󰜛' },
      { name: 'CSS3', level: 90, icon: '󰌜' },
      { name: 'JavaScript', level: 88, icon: '󰌞' },
      { name: 'React', level: 85, icon: '󰜈' },
      { name: 'Vue.js', level: 75, icon: '󰡄' },
      { name: 'Tailwind CSS', level: 92, icon: '󱏿' },
    ],
  },
  {
    title: 'Tools',
    icon: '󰛦',
    skills: [
      { name: 'Git', level: 88, icon: '󰊢' },
      { name: 'Docker', level: 70, icon: '󰡨' },
      { name: 'Podman', level: 65, icon: '󰡨' },
      { name: 'VS Code', level: 95, icon: '󰨞' },
    ],
  },
  {
    title: 'Design',
    icon: '󰏗',
    skills: [
      { name: 'UI/UX Design', level: 85, icon: '󰏘' },
      { name: 'Figma', level: 80, icon: '󰏘' },
      { name: 'Responsive Design', level: 92, icon: '󰍹' },
    ],
  },
  {
    title: 'AI-Powered Development',
    icon: '󰚩',
    skills: [
      { name: 'AI-Assisted Coding', level: 90, icon: '󰚩' },
      { name: 'Prompt Engineering', level: 88, icon: '󰍉' },
      { name: 'AI Debugging Tools', level: 85, icon: '󰙨' },
      { name: 'Code Generation & Optimization', level: 87, icon: '󰇧' },
    ],
  },
  {
    title: 'Other',
    icon: '󰒓',
    skills: [
      { name: 'REST APIs', level: 82, icon: '󰖕' },
      { name: 'Performance Optimization', level: 78, icon: '󰓅' },
      { name: 'Accessibility', level: 80, icon: '󰅎' },
    ],
  },
]

export default function Skills({ darkMode }) {
  const sectionRef = useScrollReveal()
  const [visibleSkills, setVisibleSkills] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisibleSkills(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`section ${darkMode ? 'bg-bg-dark' : 'bg-white/60 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            The tools and technologies I use to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, catIndex) => (
            <div
              key={category.title}
              className={`card reveal-scale ${darkMode ? '' : 'bg-white'}`}
              style={{ transitionDelay: `${catIndex * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-dark'}`}>
                  {category.title}
                </h3>
              </div>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">{skill.icon}</span>
                        <span className={`text-sm font-medium ${
                          darkMode ? 'text-gray-200' : 'text-gray-700'
                        }`}>
                          {skill.name}
                        </span>
                      </div>
                      <span className={`text-xs font-mono ${
                        darkMode ? 'text-mint' : 'text-dark-600'
                      }`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-bar-fill"
                        style={{
                          width: visibleSkills ? `${skill.level}%` : '0%',
                          transitionDelay: `${catIndex * 150 + i * 80}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 reveal">
          <h3 className={`text-xl font-bold text-center mb-8 ${darkMode ? 'text-white' : 'text-dark'}`}>
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Git', 'Docker', 'Podman', 'REST APIs', 'Figma', 'Responsive Design', 'Kilo', 'OpenCode', 'ChatGPT', 'Claude AI'].map((tech, i) => (
              <span
                key={tech}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 reveal-scale ${
                  darkMode
                    ? 'bg-dark-500/50 text-mint neon-border hover:neon-box'
                    : 'bg-gray-100 text-dark-600 border border-dark-600/20 hover:border-dark-600/40 hover:shadow-lg'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
