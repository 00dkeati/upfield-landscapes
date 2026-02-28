/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#F44336',
        'brand-coral': '#FF4136',
        'brand-black': '#000000',
        'brand-dark': '#0a0a0a',
        'brand-silver': '#A0A0A0',
        'brand-silver-light': '#C0C0C0',
        'brand-gray': '#808080',
      },
      fontFamily: {
        'heading': ['Oswald', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      letterSpacing: {
        'logo': '0.15em',
      },
    },
  },
  plugins: [],
}
