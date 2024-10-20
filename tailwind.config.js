/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      primary: "#238857",
      bg: '#FFEEDF',
      secondary: '#238857CC',
      white: '#fff'
    },
    extend: {
      fontFamily: {
        primary: ['Baskervville SC'],
        secondary: ["Cormorant Upright"],
      }
    },
  },
  plugins: [],
}

