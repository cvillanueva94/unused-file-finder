#!/usr/bin/env node
const path = require('path');

let values = {
    directory: '.',
    ignorePaths: ['.git', 'node_modules', 'public']
}

const packageJSON = require(path.resolve('.', 'package.json'))

if (packageJSON.unusedFileFinder) {
    values = { ...packageJSON.unusedFileFinder, ...values }
}

const structure = require("../src/structure")(values.directory, values)


const response = require('../src/find')(structure)

console.log(`
%c Unused files in your project:

`, 'color: green; font-weight: bold;');

response.forEach(element => {
    console.log(` - ${element}`)
})