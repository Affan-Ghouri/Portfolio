import React, { useState, useEffect } from 'react'

const greetings = [
  'Hello',       // English
  'Hola',        // Spanish
  'Bonjour',     // French
  'Hallo',       // German
  'こんにちは',    // Japanese
  'مرحبا',       // Arabic
  'السلام علیکم', // Urdu
  '你好',         // Chinese
  '안녕하세요',    // Korean
  'नमस्ते',       // Hindi
  'Привет',      // Russian
  'Ciao',        // Italian
  'Olá',         // Portuguese
  'Merhaba',     // Turkish
  'Halo',        // Indonesian
]

export default function LoadingScreen({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % greetings.length)
    }, 500)

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 1
      })
    }, 30)

    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        onComplete()
      }, 500)
    }, 3200)

    return () => {
      clearInterval(interval)
      clearInterval(progressInterval)
      clearTimeout(timer)
    }
  }, [onComplete])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-hello">
        {greetings[currentIndex]}
      </div>
      <div className="loading-bar">
        <div
          className="loading-bar-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="mt-6 text-gray-500 text-sm tracking-widest uppercase">
        Loading Portfolio
      </p>
    </div>
  )
}
