/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '540px',
      },
      backgroundImage: {
        fader:
          'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,.7) 60%, rgba(0,0,0,0) 100%)',
      },
    },
  },
  plugins: [],
};
