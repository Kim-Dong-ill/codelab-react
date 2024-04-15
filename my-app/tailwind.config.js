/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        sb: {
          50: "#f2fafc",
          100: "#e4f3f7",
          200: "#c0e3ed",
          300: "#9fd1e3",
          400: "#61aacf",
          500: "#2c83ba",
          600: "#2572a8",
          700: "#19578c",
          800: "#104070",
          900: "#092b54",
          950: "#041836",
        },
        screaminGreen: {
          50: "#f8fcf2",
          100: "#f3fce8",
          200: "#dcf7c6",
          300: "#c1f2a2",
          400: "#85e864",
          500: "#3cdd27",
          600: "#33c720",
          700: "#24a616",
          800: "#1a850f",
          900: "#106308",
          950: "#084003",
        },
      },
    },
  },
  plugins: [],
};
