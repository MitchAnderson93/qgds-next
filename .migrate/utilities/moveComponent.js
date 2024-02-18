const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createStoryFile = (componentName, targetDir) => {
  const storyContent = `// ${componentName}.stories.js
import ${componentName}Template from './html/component.hbs';
import siteData from '../../data/site.json'; 

export default {
  title: 'Components/${componentName}',
};

const Template = (args) => ${componentName}Template(args);
export const Default${componentName} = Template.bind({});
Default${componentName}.args = {
  site: siteData 
};
`;

  const storyFilePath = path.join(targetDir, `${componentName}/${componentName}.stories.js`);
  fs.writeFileSync(storyFilePath, storyContent);
  console.log(`Created story file at ${storyFilePath}`);
};

const copyComponent = (sourceDir, targetDir, componentName) => {
  const sourcePath = path.join(sourceDir, componentName);
  const destinationPath = path.join(targetDir, componentName);

  if (!fs.existsSync(sourcePath)) {
    console.error('Component directory does not exist:', sourcePath);
    return;
  }

  fs.copySync(sourcePath, destinationPath);
  console.log(`Copied component from ${sourcePath} to ${destinationPath}`);
  createStoryFile(componentName, targetDir);
};

const selectAndCopyComponent = () => {
  const sourceDirectory = path.join(__dirname, '../../.migrate/components/');
  const targetDirectory = path.resolve(__dirname, '../../src/components');

  fs.readdir(sourceDirectory, (err, components) => {
    if (err) {
      console.error('Error reading components directory:', err);
      rl.close();
      return;
    }

    console.log('Please select the component to copy:');
    components.forEach((component, index) => {
      console.log(`${index + 1}. ${component}`);
    });

    rl.question('Enter the number of the component you want to copy over from the latest release: ', (number) => {
      const componentIndex = parseInt(number, 10) - 1;
      if (componentIndex >= 0 && componentIndex < components.length) {
        const chosenComponent = components[componentIndex];
        copyComponent(sourceDirectory, targetDirectory, chosenComponent);
      } else {
        console.log('Invalid selection. Exiting.');
      }
      rl.close();
    });
  });
};

selectAndCopyComponent();