const path = require("path");
const webpack = require("webpack");
const glob = require("glob");
const globalAssets = [...glob.sync(path.resolve(__dirname, "../src/**/*.+(ico|png|css)"))];

module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: [
    "storybook-preset-craco",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  typescript: {
    check: true,
  },
  webpackFinal: async config => {
    config.entry = [...config.entry, ...globalAssets];

    return config;
  },
};
