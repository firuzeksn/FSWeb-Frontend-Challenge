/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // Bu satır kritik!
  theme: {
    extend: {
      colors: {
        'brand-purple': '#4731D3',
        'dark-bg': '#252128',
        'dark-text': '#AEB1FF',
      },
    },
  },
  plugins: [],
}