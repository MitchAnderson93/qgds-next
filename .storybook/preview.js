/** Let's style storybook */
const withBodyWrapper = (storyFn) => `<body class="qld__grid">${storyFn()}</body>`;

/** @type { import('@storybook/html').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [withBodyWrapper],
};

export default preview;