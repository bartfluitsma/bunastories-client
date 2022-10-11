/** @type {import('tailwindcss').Config} */

// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './src/**/*.{html,js,jsx}',
  ], theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'primaryColor': '#B5532C',
      'secondaryColor': '#D3AB49',
      // 'accentColor': '#B5532C',
      'lightColor': '#EEE9E6',
      'darkColor': '#343434',
      'lightGreyColor': '#737373'
    },
    // fontSize: {
    //   'xs': '12px',
    //   'sm': '14px',
    //   'base': 'clamp(1rem, 4.8vw, 1rem)',
    //   'lg': 'clamp(16px, 4.8vw, 22px)',
    //   'xl': '1.25rem', // h6
    //   '2xl': '1.5rem', // h5
    //   '3xl': 'clamp(1.35rem, 3.5vw, 1.6rem)', // h4
    //   '4xl': 'clamp(1.9rem, 4vw, 2.5rem)', // h3
    //   '5xl': 'clamp(2.2rem, 4.5vw, 3rem)', // h2
    //   '6xl': 'clamp(2rem, 4vw + 1rem, 3rem);', // h1
    // },
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
        unit: 'rem', // default is rem but it's also possible to use 'px'
        prefix: '' // set a prefix to use it alongside the default font sizes
      },
      // Creates the text-xx classes
      // This are the default settings and analog to the tailwindcss defaults
      // Each `lineHeight` is set unitless and we think that's the way to go especially in context with fluid type.
      values: {
        'xs': [-2, 1.6],
        'sm': [-1, 1.6],
        'base': [0, 1.6],
        'lg': [1, 1.6],
        'xl': [2, 1.2],
        '2xl': [3, 1.2],
        '3xl': [4, 1.2],
        '4xl': [5, 1.1],
        '5xl': [6, 1.1],
        '6xl': [7, 1.1],
        '7xl': [8, 1],
        '8xl': [9, 1],
        '9xl': [10, 1],
      }
    },
    variants: {
      fluidType: ['responsive']
    },
    extend: {
      fontFamily: {
        primary: ["Josefin Sans", "sans-serif"],
        secondary: ["Lato", "sans-serif"],
      }
    },
  },
  corePlugins: {
    fontSize: false,
  },
  plugins: [
    require('tailwindcss-fluid-type'),
  ],
  tailwindConfig: './styles/tailwind.config.js',
}
