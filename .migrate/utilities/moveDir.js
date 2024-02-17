const fs = require('fs-extra');
const path = require('path');

const moveDirectory = (sourcePath, destinationPath) => {
  // Check if source directory exists
  if (!fs.existsSync(sourcePath)) {
    console.error('Source directory does not exist:', sourcePath);
    return;
  }
  fs.moveSync(sourcePath, destinationPath, { overwrite: true }, (err) => {
    if (err) {
      console.error(`Error moving directory from ${sourcePath} to ${destinationPath}:`, err);
    } else {
      console.log(`Moved directory from ${sourcePath} to ${destinationPath}`);
    }
  });
};

const moveSrcDirectory = () => {
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
    }
  ];

  directoriesToMove.forEach(({ sourcePath, destinationPath }) => {
    moveDirectory(sourcePath, destinationPath);
  });
};

// Move src directory and then run webpack build
moveSrcDirectory();