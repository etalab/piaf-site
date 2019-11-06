module.exports = {
  theme: {
    extend: {
      borderColor: theme => ({
        gray: '#e0e0e0'
      }),
      colors: {
        'red': '#e31e3f',
        'blue': '#0d1b3f',
        'blue-dark': '#100a32',
        'purple': '#0f0a3a',
        'purple-light': '#391d81'
      },
      fontFamily: {
        'cooper-light': ['cooper_hewittlight', 'sans-serif'],
        'cooper-medium': ['cooper_hewittmedium', 'sans-serif'],
        'cooper-semi-bold': ['cooper_hewittsemibold', 'sans-serif'],
      },
      inset: {
        '-1': '-.25rem',
        '-2': '-.5rem',
        '-6': '-1.5rem',
        '-1/3': '-33.3333%',
        '-1/2': '-50%',
        '3': '.75rem',
        '40': '10rem',
        '48': '12rem',
        '64': '16rem',
        '-1/2vw': '-25vw',
        '-10vh': '-10vh',
        '-15vh': '-15vh',
        '-40vh': '-40vh'
      },
      fontSize: {
        '2/5xl': '1.6875rem',
        '7xl': '5rem'
      },
      maxWidth: {
        xxs: '10rem',
        'xsm': '15rem',
      },
      maxHeight: {
        xxs: '6rem',
      },
      backgroundPosition: {
        full: '100%'
      },
      minHeight: {
        '24': '6rem',
        '3/4': '75vh'
      },
      scale: {
        '70': '.7',
        '100': '1'
      },
    }
  },
  variants: {
    margin: ['responsive','first', 'last']
  },
  plugins: [
    require('tailwindcss-transforms')({
      '3d': false, // defaults to false
    }),
  ],
}
