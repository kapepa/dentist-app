const mongoose = require('mongoose');
const { Schema } = mongoose;

const diagnostics = new mongoose.Schema({
  _id: Schema.Types.ObjectId,
  desc: String,
  price: Number,
  position: Number,
  time: Date,
  end: Date,
  users: { type: Schema.Types.ObjectId, ref: 'Users' },
  timestamps: { createdAt: true, updatedAt: true },
});

const DiagnosticsSchema = mongoose.model('Diagnostics', diagnostics);

module.exports = DiagnosticsSchema;