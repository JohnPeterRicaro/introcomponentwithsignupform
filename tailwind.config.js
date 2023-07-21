/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**.{html,css}"],
  screens:{
    sm: '480px',
    md: '768px',
    lg: '976px',
    xl: '1440px'
  },
  theme: {
    extend: {
      colors: {
        componentRed: "hsl(0, 100%, 74%)",
        componentGreen: "hsl(154, 59%, 51%)",
        componentBlue: "hsl(248, 32%, 49%)",
        componentDarkBlue: "hsl(249, 10%, 26%)",
        componentGrayishBlue: "hsl(246, 25%, 77%)",
      },
      boxShadow:{
        shadow1: '0px 11px 0px 1px rgba(0,0,0,0.22)',
        shadow2: '0px 4px 0px 1px rgba(0,0,0,0.18)',
        insetShadow1: '0px -4px 1px 0px rgba(0,0,0,0.16) inset'
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
