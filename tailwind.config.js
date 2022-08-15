/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'navy': '#22223B',
      'light-blue': '#4A4E69',
      'light-purple': '#9A8C98',
      'brown': '#C9ADA7',
      'offwhite': '#F2E9E4',
    },
    fontFamily: {
      body: ['Roboto', 'sans-serif'],
      title: ['Comfortaa', 'cursive'],
    },
    extend: {},
  },
  plugins: [],
}
