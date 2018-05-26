const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techieSchema = new Schema({
  name: String,
  bio: String,
  img: String,
  stack: String,
  position: String,
  socialId: String
})

module.exports = mongoose.model('Techie', techieSchema);