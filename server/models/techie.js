const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const techieSchema = new Schema({
  name: String,
  bio: String,
  img: String,
  stack: String,
  current_role: String,
  years_in_tech: String,
  twitter: String,
  instagram: String,
  linkedin: String,
  github: String,
  website: String
})

module.exports = mongoose.model('Techie', techieSchema);