/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.js',
    './pages/*.js',
    './src/**/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Inter', 'sans-serif',]
      },
      colors:{
        primary: '#6a82fb',
        secondary: '#fc5c7d',
        backgroundColor: '#121214',
      },
      backgroundImage:{
        backgroundColor: '#121214',
        shadowpaper: 'linear-gradient(180.0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.9) 67.08%)',
        gradient: 'linear-gradient(to right, #fc5c7d, #6a82fb, #3f51b5)',
        homebg : "url('/purplesound.mp4')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
