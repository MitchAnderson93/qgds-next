
    // main_navigation.stories.js
    import main_navigationTemplate from './html/component.hbs';
    import siteData from '../../data/site.json'; 

    export default {
      title: 'Components/main_navigation',
    };

    const Template = (args) => main_navigationTemplate(args);
    export const main_navigation = Template.bind({});
    main_navigation.args = {
      site: siteData 
    };