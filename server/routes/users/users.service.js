const UsersSchema = require('../../schema/users.schema.js');
const FileService = require('../file/file.service.js');

const UsersService = {
  findOne: async (symbol, value) => {
    const user = await UsersSchema.findOne({[symbol]: value}).populate('diagnostics').exec();
    return user;
  },
  findAll: async () => {
    const all = await UsersSchema.find({}).populate('diagnostics').exec();
    return [{date: "11.03", data: all}];
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