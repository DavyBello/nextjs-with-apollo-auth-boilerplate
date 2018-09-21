module.exports = {
  webpack: config => {
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
