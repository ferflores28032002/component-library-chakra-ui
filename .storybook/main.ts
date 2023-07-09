const path = require("path");

module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"];

    // Agrega la siguiente configuración para excluir los componentes de Chakra UI
    config.module.rules.push({
      test: /@chakra-ui/,
      use: "null-loader",
    });

    return config;
  },
  refs: {
    "@chakra-ui/react": {
      disable: true,
    },
  },
  features: {
    emotionAlias: false,
  },
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    docsPage: true,
  },
  staticDir: ["../public", "../static"],
};
