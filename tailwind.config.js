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
        '10p': '10%',
        '20p': '20%',
        '30p': '30%',
        '40p': '40%',
        '50p': '50%',
        '60p': '60%',
        '70p': '70%',
        '80p': '80%',
        '90p': '90%',
        '100p': '100%',

      }
      
    },
  },
  plugins: [],
}
