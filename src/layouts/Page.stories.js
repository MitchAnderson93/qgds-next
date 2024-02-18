// header.stories.js
import siteData from '../data/site.json'; // Importing the JSON data
import pageTemplate from '../components/index.hbs';

// These imports have no CSS output, but provide variables, mixins and helpers to aid in construction of a design cutup.

// Export default
export default {
  title: 'Templates/Standard page',
};

const Template = (args) => pageTemplate(args);
export const Page = Template.bind({});
Page.args = {
  site: siteData 
};