const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');

const FileService = {
  saveFile: async (file) => {
    const name = uuidv4();
    const prefix = file.name.split('.').pop();
    const newName = `${name}.${prefix}`;
    const pathTo = path.resolve(__filename, '..', '..', 'public', 'images');

    fs.writeFile(pathTo, file, (err) => {
        console.log(err)
    })


    console.log()
    return
  }
};

module.exports = FileService;