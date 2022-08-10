/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      msm: '520px',
      md2: '720px',
      md: '768px',
      
      mymd: '880px',
      lg: '976px',
      lg2: '980px',
      mylg:'1200px',
      xl: '1440px',

      'sm1': {'max': '520px'} 
    },
    colors: {
     'bg-zinc': '#f3f6fd',
     
    },
    extend: {},
  },
  plugins: [],
}
