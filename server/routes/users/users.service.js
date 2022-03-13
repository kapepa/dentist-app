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
    const user = await UsersSchema.findOneAndUpdate({[symbol]: value}).then(doc => {
      const { diagnostics, ...other } = data;
      if(diagnostics) doc.diagnostics.push(diagnostics);
      if(Object.keys(other).length) doc = Object.assign(doc,other);
      doc.save();
    });
    return user;
  },
  create: async (body) => {
    const obj = body.reduce((accum, arr) => {
      accum[arr[0]] = arr[1];
      return accum
    },{});

    const avatar = await FileService.saveFile(obj.avatar);


//    const create = await UsersSchema.create({...body});
//    return create;
  },
  remove: async (id) => {
    const remove = await UsersSchema.findByIdAndDelete(id);
    return remove;
  }
};

module.exports = UsersService;