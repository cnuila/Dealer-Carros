module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
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
        '72': '28rem',
      }
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('autoprefixer'),
  ],
}
