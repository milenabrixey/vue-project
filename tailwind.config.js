/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Define custom colors
        cyan: '#06D7F6',
        blue: '#1388D9',
        lightpurple: '#7383FB',
        purple: '#400686',
      },
      animation: {
        glow: 'glow 1.5s infinite alternate', // Glow animation for text
      },
      keyframes: {
        glow: {
          '0%': {
            textShadow:
              '0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(255, 255, 255, 0.5)',
          },
          '100%': {
            textShadow:
              '0 0 15px rgba(255, 255, 255, 0.7), 0 0 25px rgba(255, 255, 255, 0.6), 0 0 35px rgba(255, 255, 255, 0.5)',
          },
        },
      },
    },
  },
  plugins: [
    daisyui,
    // Define custom class
    function ({ addUtilities, theme }) {
      const newColors = theme('colors')
      addUtilities({
        '.gradient-text': {
          background: `linear-gradient(90deg, ${newColors.cyan}, ${newColors.blue}, ${newColors.lightpurple}, ${newColors.purple})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        },
      })
    },
  ],
}
