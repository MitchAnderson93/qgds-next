
    // internal_navigation.stories.js
    import internal_navigationTemplate from './html/component.hbs';
    import current from './data/manifest.json'; 
    import './js/index.js';

    export default {
      title: 'Components/internal_navigation',
    };

    const Template = (args) => internal_navigationTemplate(args);
    export const internal_navigation = Template.bind({});
    internal_navigation.args = {
      current: current
    };