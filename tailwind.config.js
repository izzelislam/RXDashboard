/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary   : '#5679F5',
        secondary : '#E8EDFF',
        success   : '#00CF9D',
        danger    : '#FF5555',
        warning   : '#E15E00',
        warning2  : '#FFB800',
        dark      : '#34364A',

        lightPrimary : '#E8EDFF',
        lightWarning : '#FFE5CA',
        // lightWarning : '#FFE5CA',

        backround: "#F6F8FD",
        slateprimary: '#F1F4FF',

        ireng: '#34364A',
        slateIreng: '#7A7C93'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

