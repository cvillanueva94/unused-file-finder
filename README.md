# unused-file-finder

## Installation

To install [`unused-file-finder`](https://npm.im/unused-file-finder)  with [`yarn`](https://yarnpkg.com), run:
```sh 
yarn add unused-file-finder -D
```

## Configuration

The default settings is:
```json
{
    "directory": ".",
    "ignorePaths": [".git", "node_modules", "public"]
}
```

But if you need to modify it, you need to add a code similar to the following to your package.json:

```json
"unusedFileFinder": {
    "directory": ".",
    "ignorePaths": [".git", "node_modules", "public"]
}
```

## Examples
Using [`npx`](https://docs.npmjs.com/cli/v8/commands/npx) in a standard [Node.js](https://nodejs.org) project:
```sh
npx unused-file-finder
```
