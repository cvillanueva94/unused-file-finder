const getFolderStructure = require('../src/structure');

describe('getFolderStructure Tests', () => {
  test('getFolderStructure should be a function', () => {
    expect(typeof getFolderStructure).toBe('function');
  });

  test('getFolderStructure should return an array', () => {
    const config = {
      ignorePaths: ['test']
    }
    const pathName = './'
    const result = getFolderStructure(pathName, config);
    expect(Array.isArray(result)).toBe(true);
  });

  test('getFolderStructure should ignore paths specified in config', () => {
    const config = {
      ignorePaths: ['__test__']
    }
    const pathName = './'
    const result = getFolderStructure(pathName, config);
    expect(result).not.toContain(expect.stringContaining('test'));
  });
});