const path = require('path');

module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9000',
        ws: true,
        changeOrigin: true,
      },
    },
    overlay: false,
  },
  configureWebpack: {
    resolve: {
      alias: {
        styles: path.resolve('./src/assets/css'),
      },
    },
  },
};
