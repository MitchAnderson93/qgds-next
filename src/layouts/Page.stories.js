// header.stories.js
import siteData from '../data/site.json'; // Importing the JSON data
import pageTemplate from '../components/index.hbs';
import '../../.storybook/previewStyles.css'; // Import custom CSS file

// Export default
export default {
  title: 'Templates/Standard page',
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  layout: 'fullscreen', // Optionally use fullscreen layout
  previewClassName: 'custom-storybook-preview', // Custom class for the preview window
};

const Template = (args) => pageTemplate(args);
export const Page = Template.bind({});
Page.args = {
  site: siteData
};