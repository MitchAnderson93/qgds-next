// footer.stories.js
import footerTemplate from './html/component.hbs';
import siteData from '../../data/site.json'; 

export default {
  title: 'Components/Footer',
};

const Template = (args) => footerTemplate(args);
export const Footer = Template.bind({});
Footer.args = {
  site: siteData 
};
