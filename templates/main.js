module.exports = `const webpackConfig = require("./storybook-plugin");
const webpack = require('webpack');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app"
  ],
  "framework": '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          REBEM_MOD_DELIM: JSON.stringify("_"),
          REBEM_ELEM_DELIM: JSON.stringify("-"),
        },
      })
    );

    return config;
  }
}`