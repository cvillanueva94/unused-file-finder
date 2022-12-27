#!/usr/bin/env node
const path = require('path');

const initValues = {
    directory: '.',
    ignorePaths: ['.git', 'node_modules', 'public']
}

const packageJSON = require(path.resolve('.', 'package.json'))

const values = { ...initValues, ...(packageJSON.unusedFileFinder || {}) }


const structure = require("../src/structure")(values.directory, values)


const response = require('../src/find')(structure)

console.log(`
%c Unused files in your project:

`, 'color: green; font-weight: bold;');

response.forEach(element => {
    console.log(` - ${element}`)
})