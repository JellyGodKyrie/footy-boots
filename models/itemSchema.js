const item = require('./item');

const Schema = require('mongoose').Schema;

const itemSchema = new Schema({
  name: { required: true, type: String },
  brand: { required: true, type: String },
  emoji: String,
  price: { required: true, type: Number, default: 0},
  category: { type: Schema.Types.ObjectId, ref: 'Category' },
}, {
  timestamps: true
});

module.exports = itemSchema;