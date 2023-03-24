/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors.js");
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      'zhort': {
        darkish: '#51517B',
        dark: '#30304B',
        darker: '#232338',
        gray: '#E8E9F0',
        grayer: '#B9BABF',
        primary: '#C257E1',
        secondary: '#949FE0'
      }
    },
    extend: {},
  },
  plugins: [],
}
