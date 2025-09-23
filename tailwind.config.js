/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4752A3',
        'secondary': '#E96328',
        'tertiary': '#F3F3F3',
      },
      fontFamily: {
        'primary': ['Alexandria', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
