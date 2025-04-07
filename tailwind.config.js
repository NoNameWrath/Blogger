   /** @type {import('tailwindcss').Config} */
   module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#00254D',
          secondary: '#84D3F0',
          tertiary:'#292626',
        },
        fontFamily: {
          'fell-french-canon': ['"IM FELL French Canon SC"', 'serif'],
          'lancelot' : ['"Lancelot"', 'cursive'],
          karla: ['Karla', 'sans-serif'],
        },
        fontSize: {
          'heading': '80px',
          'para': '20px',
        },
        backgroundImage:{
          'wave': "url('../src/assets/wave.png')",
          'wave2': "url('../src/assets/wave4.png')",
        },

      },
    },
    plugins: [],
  }