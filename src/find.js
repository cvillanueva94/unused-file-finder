
const path = require('path')

let final = []

// Comprueba si el archivo está siendo llamado por otro
const returnRequires = (filePath) => {
    const fs = require('fs');
    const content = fs.readFileSync(filePath, 'utf-8');

    return content.match(/require\(['"](.*?)['"]\)/gi)
};

const func = (fData)=>{
    for(const key of fData) {
        const requires = returnRequires(key)
        for(const requireX of requires ||[]) {
            let value = /require\(['"](.*?)['"]\)/.exec(requireX)
            const keyArray = key.split('/')
            keyArray.splice(keyArray.length - 1, 1)
            const filePath = keyArray.join('/')
            const dataPaht = path.resolve(filePath, `${value[1]}.js`)
            const index = final.findIndex(item => item === dataPaht)
            if(index !== -1) final.splice(index, 1)
        }
    }
}


const init= (fData)=>{
    final = [...fData]
    func(fData)
    return final
}


module.exports = init