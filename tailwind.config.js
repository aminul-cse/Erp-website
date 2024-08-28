/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "rotateY(-180deg)"
    }
  })
})
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      height: {
        '00': '7.5rem',
      },
      width: {
        '00': '7.5rem',
      },
      // TODO: need to change primary, secondary , tersiary
      colors: { 
        "primary": "#2563eb",
        "primary-dark": "#1d4ed8",
        "secondary": "#f0f9ff",
        "secondary-dark": "#e4e4e7",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    },
    fontFamily: {
      Lato: "Lato, sans-serif",
      SourceSerif: "Serif 4",
      Alegreya: "Alegreya"
    }
  },
  plugins: [rotateY],
}

