const {nextui} = require('@nextui-org/theme');
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      tiles: "#00a4bc",
      background: "#2f4858",
      icons: "#fc3794",
      text: "#f8fbeb",
      bottomBar: "#9999cc",
      red: "#ff3e40",
      yellow: "#e5de00",
      green : "#00a21b"
    },
    extend: {},   
  },
  darkMode: "class",
  plugins: [nextui()],
}

