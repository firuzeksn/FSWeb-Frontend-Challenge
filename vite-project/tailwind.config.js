/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Karanlık modun class ile çalışması için şart
  theme: {
    extend: {
      colors: {
        // Tasarımdaki özel renkleri buraya isimle tanımlıyoruz
        'brand-purple': '#4731D3',
        'brand-green': '#CBF281',
        'dark-bg': '#252128',
        'dark-text': '#AEB1FF',
      },
    },
  },
  plugins: [],
}