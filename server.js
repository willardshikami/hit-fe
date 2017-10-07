const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//init app var for express
const app = express();

//port var
const port = 3000;

//Connect to DB
mongoose.connection.openUri('mongodb://localhost')
const db = mongoose.connection;


//API endpoint
app.get('/', (req, res) => {
  res.send('API endpoint')
});

//listen to server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});