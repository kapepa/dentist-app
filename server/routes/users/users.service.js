const UsersSchema = require('../../schema/users.schema.js');
const FileService = require('../file/file.service.js');

const UsersService = {
  findAll: async () => {
    const all = await UsersSchema.find().sort({'createdAt': 1}).populate('diagnostics').then(doc => {
      const obj = new Object();
      for(let user of doc){
        const date = new Date(user.updatedAt)
        const month = date.getMonth();
        const day = date.getDay();
        const fullDay = `${ month < 10 ? `0${month}` : month }.${ day < 10 ? `0${day}` : day }`

        if(!obj[fullDay]) obj[fullDay] = { date: fullDay, data: [] };
        obj[fullDay].data.push(user)
      }
      return Object.values(obj);
    })

    return all;
  },
  findOne: async (symbol, value) => {
    const user = await UsersSchema.findOne({[symbol]: value}).populate('diagnostics').exec();
    return user;
  },
  update: async (symbol, value, data) => {
    const { diagnostics, ...other } = data;
    const user = await UsersSchema.findOneAndUpdate(
      {[symbol]: value},
      {$set: {...other}, $push: {'diagnostics': diagnostics}}
    );
    return user;
  },
  create: async (body) => {
    const avatar = Object.keys(body.avatar).length ? await FileService.saveFile(body.avatar) : {};
    const create = await UsersSchema.create({...body, avatar});
    return create;
  },
  remove: async (id) => {
    const remove = await UsersSchema.findByIdAndDelete(id);
    return remove;
  }
};

module.exports = UsersService;