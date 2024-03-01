// header.stories.js
import siteData from '../data/site.json'; 
import pageTemplate from '../components/index.hbs';
import '../../.storybook/previewStyles.css'; 

// Export default
export default {
  title: 'Templates/Standard page',
  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  layout: 'fullscreen', 
  previewClassName: 'custom-storybook-preview', 
};

const Template = (args) => pageTemplate(args);
export const Page = Template.bind({});
Page.args = {
  site: siteData
};