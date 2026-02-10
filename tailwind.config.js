/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     /* colors: {
        'brand-purple': '#4731d3',
        'brand-green': '#CBF281',
        'dark-bg': '#252128',
        'dark-text': '#AEB1FF',
      },*/
    },
  },
  plugins: [],
}