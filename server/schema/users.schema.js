const mongoose = require('mongoose');
const { Schema } = mongoose;

const users = new mongoose.Schema({
  name: String,
  phone: String,
  avatar: {
    type: String,
    default: '',
  },
  diagnostics: [{ type: Schema.Types.ObjectId, ref: 'Diagnostics' }],
},{
  timestamps: { createdAt: true, updatedAt: true },
});

const UsersSchema = mongoose.model('Users', users);

module.exports = UsersSchema;