/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media'
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  theme: {
    extend: {
      colors: {
        lime: "#BFDE42",
        white: "#FFFFFF",
        "grey-1": "#1E1E20",
        "grey-2": "#1A1A1A",
        "grey-3": "#313234",
        "blue-1": "#11B0C8",
        "blue-2": "#42B4CA",
      },
      fontFamily: {
        custom: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1440px",
        "2xl": "1536px",
      },
    },
    fontFamily: {
      fontFamily: {
        sans: ["'Inter'"],
        serif: ["'Inter'"],
        mono: ["'Inter'"],
        display: ["'Inter'"],
        body: ["'Inter'"],
      },
    },
  },
  plugins: [],
};
