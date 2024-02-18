// header.stories.js
import headerTemplate from './html/component.hbs';
import siteData from '../../data/site.json'; 

export default {
  title: 'Components/header',
};

const Template = (args) => headerTemplate(args);
export const Defaultheader = Template.bind({});
Defaultheader.args = {
  site: siteData 
};