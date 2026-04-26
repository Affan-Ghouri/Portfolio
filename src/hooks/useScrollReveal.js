import { useEffect, useRef } from 'react'

export default function useScrollReveal(dependencies = []) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const els = entry.target.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade')
          els.forEach((el, i) => {
            if (entry.isIntersecting) {
              setTimeout(() => el.classList.add('visible'), i * 80)
            } else {
              el.classList.remove('visible')
            }
          })
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const current = sectionRef.current
    if (current) observer.observe(current)
    return () => observer.disconnect()
  }, dependencies)

  return sectionRef
}
