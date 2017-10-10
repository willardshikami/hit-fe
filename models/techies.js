const mongoose = require('mongoose');
const config = require('../config/database');

//techies schema
const TechieSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  company: {
    type: String,
  },
  website: {
    type: String,
    required: true
  },
  years_in_tech: {
    type: String,
    required: true
  },
  short_bio: {
    type: String,
    required: true
  },
  proudest_project: {
    type: String,
    required: true
  },
  about_project: {
    type: String,
    required: true
  },
  tech_stack: {
    type: String,
    required: true
  },
  career_struggles: {
    type: String,
    required: true
  },
  career_accomplishments: {
    type: String,
    required: true
  },
  date_added: {
    type: Date,
    default: Date.now
  }
});

const Techie = module.exports = mongoose.model('Techie', TechieSchema);

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}


//get techies
module.exports.getTechies = function(callback, limit){
  Techie.find(callback).limit(limit);
}

//get ONE techie
module.exports.getTechieByName = function(name, callback){
  const query = { name: name }
  Techie.findOne(query, callback);
}