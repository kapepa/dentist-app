const DiagnosticsSchema = require('../../schema/diagnostics.schema.js');
const UsersService = require('../users/users.service.js');

const DiagnosticsService = {
  create: async (body) => {
    const { _id , ...other } = body;
    const create = await DiagnosticsSchema.create({...other, users: _id});
    const user = await UsersService.update('_id',_id,{diagnostics: create})
    const one = await UsersService.findOne(_id);

    return one;
  }
}

module.exports = DiagnosticsService;
