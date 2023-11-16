/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
  
        '50':50,
        '60':60,
        '70':70
      }
    },
  },
  plugins: [],
}