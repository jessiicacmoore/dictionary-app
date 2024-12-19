/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  safelist: ["font-sans", "font-serif", "font-mono"],
  theme: {
    extend: {
      colors: {
        primary: {
          purple: {
            100: "rgba(164, 69, 237, 0.2)",
            200: "rgba(164, 69, 237, 0.6)",
            500: "rgba(164, 69, 237, 1)",
            800: "#522377",
          },
        },
        gray: {
          100: "#fefefe",
          200: "#f4f4f4",
          300: "#9ca3b0",
          500: "#757575",
          600: "#2d2d2d",
          700: "#050505",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        mono: ["Inconsolata", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
};
