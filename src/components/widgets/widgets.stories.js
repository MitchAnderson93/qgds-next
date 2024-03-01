// widgets.stories.js
import widgetsTemplate from './html/component.hbs';
import site from './data/manifest.json'; 
import './js/index.js';

export default {
  title: 'Components/widgets',
};

const Template = (args) => widgetsTemplate(args);
export const widgets = Template.bind({});
widgets.args = {
  site: site
};
