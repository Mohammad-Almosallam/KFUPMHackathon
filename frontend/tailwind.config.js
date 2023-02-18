/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Outfit", "sans-serif"],
      serif: ["Outfit", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
