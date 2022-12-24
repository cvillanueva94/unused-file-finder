#!/usr/bin/env node

const values = {
    directory: '.',
    ignorePaths: ['.git', 'node_modules']
}
const structure = require("./structure")(values.directory, values)


const response = require('./find')(structure)

console.log(`
%c Unused files in your project:

`, 'color: green; font-weight: bold;');

response.forEach(element => {
    console.log(`   - ${element} \n`)
})