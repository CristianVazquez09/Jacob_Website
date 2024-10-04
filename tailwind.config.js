/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Italianno: ["Italianno", 'cursive'],
        Lato: ["Lato", 'sans-serif']
      },

      colors: {
        'blue-j-700': '#346DB2',
        'blue-j-500': '#1F3F63',
        'blue-j-200': '#98C7FF',
        'purple-j': "#3B2252"
      }
      
    },
  },
  plugins: [],
}

