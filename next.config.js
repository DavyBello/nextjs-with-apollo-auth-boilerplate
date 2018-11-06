require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: config => {
    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        /* eslint-disable no-undef */
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ]

    if (config.resolve.alias) {
      delete config.resolve.alias.react;
      delete config.resolve.alias["react-dom"];
    }
    {
      [
        { test: /\.css$/, loader: "style-loader!css-loader" },
      ]
    }
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: "empty"
    };

    return config;
  }
};
