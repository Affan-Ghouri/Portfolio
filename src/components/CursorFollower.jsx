import React, { useEffect, useRef } from 'react'

export default function CursorFollower() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const isHovering = useRef(false)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card')
      ) {
        isHovering.current = true
        dot.classList.add('hover')
        ring.classList.add('hover')
      }
    }

    const handleMouseOut = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('card')
      ) {
        isHovering.current = false
        dot.classList.remove('hover')
        ring.classList.remove('hover')
      }
    }

    let animationId
    const animate = () => {
      const speed = isHovering.current ? 0.15 : 0.12
      const ringSpeed = 0.08

      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * speed
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * speed
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * ringSpeed
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * ringSpeed

      const offset = isHovering.current ? 20 : 4
      dot.style.transform = `translate(${dotPos.current.x - offset}px, ${dotPos.current.y - offset}px)`
      ring.style.transform = `translate(${ringPos.current.x - 15}px, ${ringPos.current.y - 15}px)`

      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}
