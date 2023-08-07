/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {},
    fontFamily: {
      worksans: ['Work Sans', 'sans-serif'],
      intertight: ['Inter Tight', 'sans-serif']
    },
  },
  plugins: [],
}


