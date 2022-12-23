const find =require('../src/find');
const path = require('path');

describe('Pruebas con Jest', () => {
    it('debe retornar un array con el nombre de un solo archivo', () => {
        const fData = [path.resolve('./src', 'index.js'), path.resolve('./src', 'find.js')];
        const result = find(fData);

        expect(result).toEqual([path.resolve('./src', 'index.js')]);
    });

    it('debe retornar un array con los nombres de los archivos que requieren', () => {
        const fData = [path.resolve('.', 'package.json')];
        const result = find(fData);

        expect(result).toEqual(fData);
    });
});