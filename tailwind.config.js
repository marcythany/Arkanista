/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["dark", "light"],
  },
  theme: {
    extend: {},
  },
  fontFamily: {
    sans: ['Roboto']
  },
  plugins: [require("daisyui")],
}