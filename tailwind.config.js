/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration
        'footer': ' auto min(550px) min(550px) auto;',
      },
      backgroundImage:{
        'pattern': 'linear-gradient(#c4c4c4 0.8px, transparent 0.8px), linear-gradient(to right, #c4c4c4 0.8px, #ffffff 0.8px)'
      },
      backgroundSize:{
        '4': '16px 16px'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
