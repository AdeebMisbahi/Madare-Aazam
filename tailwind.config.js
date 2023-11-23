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
        '70':100
      },
      fontFamily: {
        'sans': ['Matter-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        'matter-r': ['Matter-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'matter-b': ['Matter-Bold', 'Helvetica', 'Arial', 'sans-serif'],
        'matter-m': ['Matter-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        'merienda-r': ['Merienda-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'merienda-m': ['Merienda-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        'merienda-b': ['Merienda-Bold', 'Helvetica', 'Arial', 'sans-serif'],
        'merienda-s': ['Merienda-SemiBold', 'Helvetica', 'Arial', 'sans-serif'],
       
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}