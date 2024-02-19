// header.stories.js
import headerTemplate from './html/component.hbs';
import siteData from '../../data/site.json'; 

export default {
  title: 'Components/Header',
};

const Template = (args) => headerTemplate(args);
export const Header = Template.bind({});
Header.args = {
  site: siteData 
};
