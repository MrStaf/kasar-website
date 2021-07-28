module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      body: ["Space Mono"],
      logo: ['"Josefin Sans"'],
      "logo-light": ['"Josefin Sans Light"'],
      text: ["Open Sans"],
    },
    colors: {
      bg: "#0F0B16",
      "bg-light": "#240063",
      primary: "#7A1AF3",
      secondary: "#9A55F2",
      tertiary: "#B073FF",
      white: "#ffffff",
      ligth: "rgb(255 255 255 / 25%)",
    },
    stroke: {
      black: "#000000",
      white: "#ffffff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
