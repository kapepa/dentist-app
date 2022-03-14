const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const FileService = {
  saveFile: async (file) => {
    const name = uuidv4();
    const prefix = file.uri.split('.').pop();
    const newName = `${name}.${prefix}`;
    const pathTo = path.resolve(__filename, '..', '..', '..', 'public', 'images');
    const base64 = Buffer.from(file.base64)

//
//    console.log(`${pathTo}\\${newName}`)
//
//    fs.writeFileSync(`${pathTo}\\${newName}`, base64)


    console.log(file)
    return
  }
};

module.exports = FileService;