/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#0F0F0F',
      'secondary': '#232D3F',
      'secondary-hover': ' #394657',
      'light': '#005B41',
      'lighter': '#008170',
      'black': '#000',
      'white': '#FFFF'
    },
    
    extend: {
    },
  },
  plugins: [],
}