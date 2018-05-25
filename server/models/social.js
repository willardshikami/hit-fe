const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const socialSchema = new Schema({
  twitter: String,
  instagram: String,
  linkedin: String,
  github: String,
  website: String
})

module.exports = mongoose.model('Social', socialSchema);