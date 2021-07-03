module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          dark: "#1f1e29",
          light: "#bbbbbe",
        },
        secondary: {
          DEFAULT: "#f28b03",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
