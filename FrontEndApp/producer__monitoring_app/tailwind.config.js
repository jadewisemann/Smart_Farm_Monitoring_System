/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',],
  theme: {
    extend: {
      gradientColor: {
        
      }
    },
    fontFamily: {
      'workSans': ['Work Sans', 'sans']
    },
  },
  plugins: [require("daisyui")],
}

