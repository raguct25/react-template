module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-scss',
    '@storybook/addon-knobs',
    "storybook-addon-rtl",
  ],
  framework: '@storybook/react',
};

// In package.json
// "css-loader": "^5.2.7",  // it should version 5
// "sass-loader": "^10.3.1",  // it should version 10
// "style-loader": "^2.0.0" // it should version 2
