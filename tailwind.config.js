/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#e63946',
        'brand-dark': '#1a1a2e',
        'brand-darker': '#16213e',
        'brand-gray': '#4a4a4a',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
