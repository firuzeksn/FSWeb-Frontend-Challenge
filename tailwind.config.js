/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // 1. Bu mutlaka olmalı
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 2. Kullandığın 'dark-bg' ismini burada tanımlamalısın
        'dark-bg': '#252128', 
      },
    },
  },
  plugins: [],
}