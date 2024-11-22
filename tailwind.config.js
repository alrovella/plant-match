/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fern-green": {
          50: "#f5f9f4",
          100: "#e5f3e5",
          200: "#cbe7cb",
          300: "#a2d3a3",
          400: "#72b673",
          500: "#4e9950",
          600: "#377238",
          700: "#326333",
          800: "#2b502c",
          900: "#254227",
          950: "#102311",
        },
      },
    },
  },
  plugins: [],
};
