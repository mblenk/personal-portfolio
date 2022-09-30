/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': 'rgb(255, 255, 255)',
        'tertiary': '#FFFF03',
        'neon': '#59FF5A', 
        'background': '#2B323E'
      },
      scale: {
        '200': '2.00'
      },
      fontFamily: {
        // 'sans': ['Raleway']
        // lato: ['"Lato"', ...defaultTheme.fontFamily.sans],
        // raleway: ['Raleway, sans-serif;'],
        // roboto: ['Roboto, sans-serif;'],
        // 'cormorant': '"Cormorant SC"',
        // lato: ['Lato, sans-serif;']
      },
      spacing: {
        '120': '30rem',
      },
      keyframes: {
        fadein: {
          '0%': { transform: 'translate3D(24rem)', opacity:'0' },
          '100%': { transform: 'translate3D(0rem)', opactiy:'1' }
        },
        fadeout: {
          '0%': { transform: 'translate3D(0rem)', opacity: '1' },
          '100%': { transform: 'translate3D(24rem)', opacity: '0' }
        }
      },
      animation: {
        fadein: 'fadein 0.5s ease-in',
        fadeout: 'fadeout 0.5s ease-in'
      }
    },
  },
  plugins: [],
}
