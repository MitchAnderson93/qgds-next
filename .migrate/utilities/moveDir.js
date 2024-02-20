const fs = require('fs-extra');
const path = require('path');

const copyDirectory = (sourcePath, destinationPath) => {
  // Check if source directory exists
  if (!fs.existsSync(sourcePath)) {
    console.error('Source directory does not exist:', sourcePath);
    return;
  }
  
  try {
    fs.copySync(sourcePath, destinationPath, { overwrite: true });
    console.log(`Copied directory from ${sourcePath} to ${destinationPath}`);
  } catch (err) {
    console.error(`Error copying directory from ${sourcePath} to ${destinationPath}:`, err);
  }
};

const copySrcDirectory = () => {
  const directoriesToMove = [
    {
      sourcePath: path.join(__dirname, '../../node_modules/qhealthdesign-system/src/styles'),
      destinationPath: path.join(__dirname, '../styles')
    },
    {
      sourcePath: path.join(__dirname, '../../node_modules/qhealthdesign-system/src/helpers'),
      destinationPath: path.join(__dirname, '../helpers')
    },
    {
      sourcePath: path.join(__dirname, '../../node_modules/qhealthdesign-system/src/components'),
      destinationPath: path.join(__dirname, '../components')
    },
    {
      sourcePath: path.join(__dirname, '../../node_modules/qhealthdesign-system-full/src/assets/img'),
      destinationPath: path.join(__dirname, '../../src/assets/img')
    },
  ];

  directoriesToMove.forEach(({ sourcePath, destinationPath }) => {
    copyDirectory(sourcePath, destinationPath);
  });
};

// Copy src directory
copySrcDirectory();
