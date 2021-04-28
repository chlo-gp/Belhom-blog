module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        primary: {
          100: "#EFF6F4",
          300: "#49ada1",
          500: "#045C61",
        },
        secondary: {
          100: "#F5F6FA",
          300: "#FAF4E2"
        },
        black: {
          DEFAULT: "#282828"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
