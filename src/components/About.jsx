import React from 'react'
import useScrollReveal from '../hooks/useScrollReveal'
import heroImg from '../img/hero.jpg'

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Technologies', value: '9+' },
  { label: 'Open Source Contributions', value: '50+' },
]

const focusAreas = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, performant web applications with modern frameworks like React and Vue.',
    icon: '⚡',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive user interfaces with a focus on accessibility and user experience.',
    icon: '🎨',
  },
  {
    title: 'AI-Powered Development',
    description: 'Leveraging AI tools to accelerate development, debug faster, and maximize code quality and efficiency.',
    icon: '🤖',
  },
  {
    title: 'Responsive Design',
    description: 'Ensuring seamless experiences across all devices and screen sizes.',
    icon: '📱',
  },
]

export default function About({ darkMode }) {
  const sectionRef = useScrollReveal()

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`section ${darkMode ? 'bg-bg-dark' : 'bg-white/60 backdrop-blur-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="section-title">About Me</h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Get to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal-left">
            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-dark-600 to-mint opacity-20 blur-2xl animate-pulse-neon" />
              <div className="relative w-full h-full rounded-full neon-border flex items-center justify-center overflow-hidden">
                <img
                  src={heroImg}
                  alt="Affan Ghouri"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-mint/20 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-dark-600/30 animate-float-delayed" />
            </div>
          </div>

          <div className="reveal-right">
            <h3 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-dark'}`}>
              Passionate about creating exceptional digital experiences
            </h3>
            <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm Affan Ghouri, a Software Engineer specializing in Frontend Development and UI/UX Design.
              I believe that great software is not just about functionality — it's about creating meaningful,
              delightful interactions that connect users with services in the most intuitive way possible.
            </p>
            <p className={`mb-4 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              With expertise in modern web technologies like React, Vue, and Tailwind CSS, I craft responsive,
              performant applications that look beautiful and work flawlessly. I'm also an active open source
              contributor, constantly learning and sharing knowledge with the developer community.
            </p>
            <p className={`mb-6 leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I leverage AI tools like Kilo, OpenCode, ChatGPT, and Claude to accelerate development workflows,
              debug faster, and maximize productivity. By combining human creativity with AI capabilities, I
              deliver high-quality code with greater speed and precision.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`card text-center p-4 reveal-scale ${
                    darkMode ? '' : 'bg-white'
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className={`text-2xl font-bold mb-1 ${
                    darkMode ? 'text-mint' : 'text-dark-600'
                  }`}>
                    {stat.value}
                  </div>
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="reveal">
          <h3 className={`text-2xl font-bold text-center mb-10 ${darkMode ? 'text-white' : 'text-dark'}`}>
            Key Focus Areas
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <div
                key={area.title}
                className={`card text-center group reveal-scale ${
                  darkMode ? '' : 'bg-white'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h4 className={`text-lg font-semibold mb-2 ${
                  darkMode ? 'text-white' : 'text-dark'
                }`}>
                  {area.title}
                </h4>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
