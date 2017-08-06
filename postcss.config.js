
module.exports = {
  plugins: [
    require('postcss-easy-import')({prefix: '_'}),
    require('postcss-utilities')({}),
    require('postcss-custom-media')({
      extensions: {
        // Smartphone Potrait (default)
        '--extra-extra-small': '(max-width: 399px)',
        // Smartphone Landscape
        '--extra-small-and-up': '(min-width: 400px)',
        // Tablet portrait (or large smartphone landscape)
        '--small-and-up': '(min-width: 600px)',
        // Tablet landscape
        '--medium-and-up': '(min-width: 900px)',
        // Desktop (or large tablet landscape)
        '--large-and-up': '(min-width: 1200px)',
        // Large desktop
        '--extra-large-and-up': '(min-width: 1800px)',
      }}),
    require('postcss-flexbugs-fixes'),
    require('autoprefixer')({  }), // Autoprefix after all the other plugins
  ],
};
