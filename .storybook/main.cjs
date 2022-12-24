const path = require("path");
module.exports = {
  "stories": ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  "addons": ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions"],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  async viteFinal(config, { configType: env }) {
    // customize the Vite config here
    const customConfig = {
      resolve: {
        alias: {
          '@': path.resolve('src'),
          '@assets': path.resolve('src/assets'),
          '@components': path.resolve('src/components'),
        },
      },
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
    };

    return { ...config, ...customConfig };
  },
};
