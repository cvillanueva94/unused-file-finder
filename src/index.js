#!/usr/bin/env node

const values = {
    directory: '.',
    ignorePaths: ['.git', 'node_modules', 'public']
}
const structure = require("../src/structure")(values.directory, values)


const response = require('../src/find')(structure)

console.log(`
%c Unused files in your project:

`, 'color: green; font-weight: bold;');

response.forEach(element => {
    console.log(` - ${element}`)
})