module.exports = {
  purge: [],
  theme: {
    extend: {
      transformOrigin: {
        "0": "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      spacing: {
        '66': '18rem',
        '68': '20rem',
        '69': '22rem',
        '70': '24rem',
        '72': '28rem',
        '74': '30rem',
        '76': '32rem',
        '78': '34rem',
        '80': '36rem',
        '82': '38rem',
        '84': '40rem',
      }
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [
    require('autoprefixer'),
  ],
}
