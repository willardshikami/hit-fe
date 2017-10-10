const express = require('express');
const router = express.Router();

Techie = require('../models/techies');


//get techies
router.get('/techies', (req, res, next) => {
  Techie.getTechies(function(err, techies) {
    if(err){
      throw err;
    }
    res.json(techies);
  });
});

//get ONE techies
router.get('/techies/:_name', (req, res, next) => {
  Techie.getTechieByName(req.params._name, function(err, techie) {
    if(err){
      throw err;
    }
    res.json(techie);
  });
});

//add techies
router.post('/techies', (req, res, next) => {
  var techie = req.body;
  Techie.addTechie(techie, function(err, techie) {
    if(err){
      throw err;
    }
    res.json(techie);
  });
});

//update techies
router.put('/techies', (req, res, next) => {
  
});

//delete techies
router.delete('/techies', (req, res, next) => {
  
});

module.exports = router;