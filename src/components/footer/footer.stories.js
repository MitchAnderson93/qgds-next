// footer.stories.js
import footerTemplate from './html/component.hbs';
import siteData from '../../data/site.json'; 

export default {
  title: 'Components/footer',
};

const Template = (args) => footerTemplate(args);
export const Defaultfooter = Template.bind({});
Defaultfooter.args = {
  site: siteData 
};
