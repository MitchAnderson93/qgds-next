// header.stories.js
import headerTemplate from './html/component.hbs';

export default {
  title: 'header',
};

const Template = (args) => headerTemplate(args);

export const Defaultheader = Template.bind({});
Defaultheader.args = {};