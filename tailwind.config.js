module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
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
