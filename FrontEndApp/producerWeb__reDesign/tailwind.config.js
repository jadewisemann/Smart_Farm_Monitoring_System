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
      intertight: ['Inter Tight', 'sans-serif'],
      nanumsqneo: ['NanumSquareNeo-Variable', 'san-serif']
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
}
// @font-face {
//     font-family: 'NanumSquareNeo-Variable';
//     src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_11-01@1.0/NanumSquareNeo-Variable.woff2') format('woff2');
//     font-weight: normal;
//     font-style: normal;
// }


