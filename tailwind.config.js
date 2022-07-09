/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge:["./src/**/*.{js,jsx,ts,tsx}",, "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        athensGrey: "#ECEFF2",
        purplishGrey: '#6f6a80',
        whiteSmoke: "#f4f4f4",
        cyanBlue: "#0096d4",
      }
    },
  },
  plugins: [],
}
