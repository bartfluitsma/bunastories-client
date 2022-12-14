/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fluidType: {
      // your fluid type settings
      // works only with unitless numbers
      // This numbers are the defaults settings
      settings: {
        fontSizeMin: 1.125, // 1.125rem === 18px
        fontSizeMax: 1.25, // 1.25rem === 20px
        ratioMin: 1.125, // Multiplicator Min
        ratioMax: 1.2, // Multiplicator Max
        screenMin: 20, // 20rem === 320px
        screenMax: 96, // 96rem === 1536px
        unit: "rem", // default is rem but it's also possible to use 'px'
        prefix: "", // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        xs: [-2, 1.6],
        sm: [-1, 1.6],
        base: [0, 1.6],
        lg: [1, 1.6],
        xl: [2, 1.2], // h6
        "2xl": [0, 1.2], // h5
        "3xl": [1, 1.2], // h4
        "4xl": [3, 1.1], // h3
        "5xl": [5, 1.1], // h2
        "6xl": [7, 1.1], // h1
        "7xl": [8, 1],
        "8xl": [9, 1],
        "9xl": [10, 1],
      },
    },
    variants: {
      fluidType: ["responsive"],
    },
    extend: {
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      },
      boxShadow: {
        softShadow: "0px 5px 20px 1px rgba(0, 0, 0, 0.1)",
      },
      padding: {
        mobileSidePadding: "4vw",
        tabletSidePadding: "8vw",
        desktopSidePadding: "10vw",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        primaryColor: "#B5532C",
        secondaryColor: "#D3AB49",
        // 'accentColor': '#B5532C',
        lightColor: "#EEE9E6",
        darkColor: "#343434",
        lightGreyColor: "#737373",
      },
      backgroundImage: {
        "hero-pattern-desktop":
          "url('/src/assets/images/barista-creating-figure-in-coffee-with-milk.png')",
        "hero-pattern-mobile":
          "url('/src/assets/images/barista-creating-figure-in-coffee-with-milk-mobile.png')",
        "red-spot": "url('/src/images/icons/bunastories-red-spot.svg')",
      },
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [require("tailwindcss-fluid-type")],
  tailwindConfig: "./styles/tailwind.config.js",
};
