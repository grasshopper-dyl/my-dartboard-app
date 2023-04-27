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

      },
      backgroundColor: {
        'dark-green': '#224229',
        'dartboard-black': '#1D1F21',
        'dartboard-red': '#C92C2E',
        'dartboard-green': '#1A6A2F',
        'warm-gold': '#C6A155',
        'light-off-white': '#EDEDED',
      },
      textColor: {
        'dartboard-black': '#1D1F21',
        'dartboard-red': '#C92C2E',
        'dartboard-green': '#1A6A2F',
        'warm-gold': '#C6A155',
        'light-off-white': '#EDEDED',
      },
      
    },
  },
  plugins: [
    require('@tailwindcss/forms'),

  ],
}
