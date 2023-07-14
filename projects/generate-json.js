const fs = require('fs');
const path = require('path');

const directoryPath = __dirname;

// Read the contents of the subdirectory
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.log('Error reading directory:', err);
    return;
  }

  // Filter out only the HTML files
  const htmlFiles = files.filter((file) => path.extname(file) === '.html');

  // Create the JSON object with the file names
  const jsonContent = JSON.stringify(htmlFiles);

  // Save the JSON file
  const jsonFilePath = path.join(directoryPath, 'index.json');
  fs.writeFile(jsonFilePath, jsonContent, (err) => {
    if (err) {
      console.log('Error creating JSON file:', err);
      return;
    }
    console.log('JSON file created successfully:', jsonFilePath);
  });
});

// run this script: node generate-json.js
