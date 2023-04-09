/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      rotate: {
        '9': '9deg',
        '18': '18deg',
        '36': '36deg',
        '54': '54deg',
        '72': '72deg',
        '108': '108deg',
        '126': '126deg',
        '144': '144deg',
        '162': '162deg',
      },
      borderWidth: {
        '1/2': '50%',
        'borderLeftWidthPercent': '50%',

      }
      
    },
  },
  plugins: [],
}
