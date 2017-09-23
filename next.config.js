const webpack = require('webpack');

module.exports = {
  webpack: (config) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.GRAPHCOOL_ENDPOINT': JSON.stringify(process.env.GRAPHCOOL_ENDPOINT),
      })
    );

    return config;
  },
};
