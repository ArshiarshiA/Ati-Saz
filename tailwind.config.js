/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow : {
        "cus-shadow" : 'rgb(255 255 255) 0 1px 3px, rgb(0 0 0 / 22%) 0 1px 2px'
      }
    },
  },
  plugins: [],
}