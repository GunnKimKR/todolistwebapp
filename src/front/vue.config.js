const path = require('path');

module.exports = {
  devServer: {
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
