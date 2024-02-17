// header.stories.js
import siteData from '../data/site.json'; // Importing the JSON data
import pageTemplate from '../templates/index.hbs';

export default {
  title: 'Layouts/Standard page',
};

const Template = (args) => pageTemplate(args);
export const Page = Template.bind({});
Page.args = {
  site: siteData 
};