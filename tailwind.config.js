/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FFFEF7",
        lightblack: "#11110F",
        navlight: "#1B190B",
        navlightdark: "#F5F3E6",
        dark: "#0D0D0D",
        darkorange: "#EB5939",
      },
      fontFamily: {
        avant: ["Avant", "sans-serif"],
        lubalin: ["Lubalin", "sans-serif"],
        telegraph: ["Telegraph", "sans-serif"],
        telegraphbold: ["Telegraph-Bold", "sans-serif"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
