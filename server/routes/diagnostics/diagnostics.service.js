const DiagnosticsSchema = require('../../schema/diagnostics.schema.js');
const UsersService = require('../users/users.service.js');

const DiagnosticsService = {
  create: async (body) => {
    const { _id , ...other } = body;
    const create = await DiagnosticsSchema.create({...other, users: _id});
    const user = await UsersService.update('_id',_id,{diagnostics: create})
    const one = await UsersService.findOne(_id);

    return one;
  },
  update: async (symbol, value, data) => {
  console.log({[symbol]: value})
    const diagnostic = await DiagnosticsSchema.findOneAndUpdate({[symbol]: value}).then(doc => {
      doc = Object.assign(doc,data);
      doc.save();
    });
    return diagnostic;
  },
  remove: async (id) => {
    const remove = await DiagnosticsSchema.findByIdAndDelete(id);
    return remove;
  }
}

module.exports = DiagnosticsService;
