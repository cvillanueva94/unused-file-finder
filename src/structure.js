
const fs = require('fs');
const path = require('path');

const getFolderStructure = (pPath, config) => {
  let files = fs.readdirSync(pPath);
  let fileTree = [];
  

  files = files.filter((item) => !config.ignorePaths.includes(item))

  files.forEach(file => {
    const pathName = pPath + '/' + file;
    const stats = fs.statSync(pathName);
    const completePath=path.resolve(pathName)
    if (stats.isDirectory()) {
      fileTree=[...fileTree, ...getFolderStructure(pathName, config)];
    } else {
      fileTree.push(completePath)
    }
  });

  return fileTree;
}

module.exports = getFolderStructure