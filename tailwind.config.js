module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        sm: "510px",
        Lsm: "594px",
        md: "658px",
        lg: "710px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
