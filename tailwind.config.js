export default {
  content: ["./src/**/*.{astro,html,js,ts}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f8faf9",
          100: "#eef2f0",
          200: "#dfe7e3",
          300: "#c8d3cd",
          400: "#a9b8b0",
          500: "#7f9289",
          600: "#5f726a",
          700: "#44534d",
          800: "#2c3733",
          900: "#141b19"
        },
        primary: {
          500: "#2c6e6a"
        },
        accent: {
          500: "#b08d57"
        }
      }
    }
  },
  plugins: []
};
