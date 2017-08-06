const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { ANALYZE } = process.env;

module.exports = {
  webpack(config, { dev }) {
    config.module.rules.push(
      {
        test: /\.(css)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader'
        ],
      }
    );

    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }
    return config;
  },
  exportPathMap() {
    return {
      '/': { page: '/' },
    };
  },
};
