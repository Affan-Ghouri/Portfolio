/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0f172a',
          400: '#1e293b',
          500: '#334155',
          600: '#475569',
          700: '#64748b',
        },
        mint: {
          DEFAULT: '#06b6d4',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#0891b2',
          600: '#0e7490',
          700: '#065666',
        },
        bg: {
          dark: '#020617',
          light: '#f8fafc',
        },
      },
      fontFamily: {
        sans: ['FiraCode Nerd Font', 'JetBrains Mono', 'monospace'],
        mono: ['FiraCode Nerd Font', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-down': 'slideDown 0.3s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'typewriter': 'typewriter 3s steps(40) infinite',
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'progress': 'progress 3s ease-in-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 20px #06b6d4' },
          '100%': { boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 60px #06b6d4' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 5px #06b6d4, 0 0 10px #06b6d4, 0 0 15px #06b6d4' },
          '50%': { boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4, 0 0 30px #06b6d4, 0 0 40px #06b6d4' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseNeon: {
          '0%, 100%': { textShadow: '0 0 4px #06b6d4, 0 0 11px #06b6d4, 0 0 19px #06b6d4' },
          '50%': { textShadow: '0 0 4px #06b6d4, 0 0 20px #06b6d4, 0 0 40px #06b6d4, 0 0 80px #06b6d4' },
        },
        typewriter: {
          '0%': { width: '0' },
          '50%': { width: '100%' },
          '100%': { width: '0' },
        },
        cursorBlink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: '#06b6d4' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
