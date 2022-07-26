/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '200': '2.00'
      },
      fontFamily: {
        'raleway': 'Raleway',
        'roboto': 'Roboto',
        'cormorant': '"Cormorant SC"',
        'lato': ['Lato']
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
