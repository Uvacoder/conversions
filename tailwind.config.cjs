/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        '2xs': '375px',
        '3xs': '320px',
      },
    },
  },
  plugins: [],
};
