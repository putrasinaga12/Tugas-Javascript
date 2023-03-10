/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    fontFamily: {
      poppins: ['Poppins'],
    },
    extend: {
      colors: {
        primary: '#0ea5e9',
      },
      screen:{
        '2xl': '1320px',
        'xs' : '425px',
      },
    
    },
  },
  plugins: [],
}
