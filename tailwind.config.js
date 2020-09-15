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
  variants: {},
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('autoprefixer'),
  ],
}
