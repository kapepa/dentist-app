const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new mongoose.Schema({
  name: String,
  avatar: String,
  name: String,
  phone: String,
  diagnostics: [{ type: Schema.Types.ObjectId, ref: 'Diagnostics' }],
},{
  timestamps: { createdAt: true, updatedAt: true },
});

const UsersSchema = mongoose.model('Users', users);

module.exports = UsersSchema;