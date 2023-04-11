/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {},
      aspectRatio: {
        '16/9': '16/9',
      },
    },
    fontFamily: {
      'brand': 'Inter',
    },
  },
  plugins: [],
}
