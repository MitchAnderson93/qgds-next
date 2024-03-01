const fs = require('fs-extra');
const path = require('path');
const readline = require('readline');
const ejs = require('ejs'); // Ensure you have ejs installed via npm

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const createStoryFile = async (componentName, targetDir) => {
  const templatePath = path.join(__dirname, './newStory.ejs');
  const template = fs.readFileSync(templatePath, 'utf-8');
  
  // Adjust the path to manifest.json based on targetDir
  const siteDataPath = path.join(targetDir, `${componentName}/data/manifest.json`);
  
  // Ensure you handle the case where manifest.json might not exist or be accessible
  let siteData = {};
  try {
    siteData = require(siteDataPath);
  } catch (error) {
    console.error('Could not load site data from manifest.json:', error);
  }

  const storyContent = await ejs.render(template, {
    componentName: componentName,
    // Pass the loaded site data to the template
    site: siteData
  });

  const storyFilePath = path.join(targetDir, `${componentName}/${componentName}.stories.js`);
  fs.writeFileSync(storyFilePath, storyContent);
  console.log(`Created story file at ${storyFilePath}`);
};

const createBlankFiles = (componentPath) => {
  // Create blank data.json in /data folder
  const dataFilePath = path.join(componentPath, 'data/manifest.json');
  fs.ensureFileSync(dataFilePath);
  // Initialize manifest.json with an empty object
  fs.writeFileSync(dataFilePath, JSON.stringify({}));
  console.log(`Created blank data.json file at ${dataFilePath} with initial empty JSON content`);

  // Create blank index.js in /js folder
  const indexJsPath = path.join(componentPath, 'js/index.js');
  fs.ensureFileSync(indexJsPath);
  console.log(`Created blank index.js file at ${indexJsPath}`);
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

  createBlankFiles(destinationPath);

  // Delete /component/js/global.js if it exists
  const globalJsPath = path.join(destinationPath, 'js/global.js');
  if (fs.existsSync(globalJsPath)) {
    fs.removeSync(globalJsPath);
    console.log(`Deleted global.js at ${globalJsPath}`);
  }

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
