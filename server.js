const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//init app var for express
const app = express();

//port var
const port = 3000;

//linking to clientside
app.use(express.static(path.join(__dirname, 'client')));

//Connect to DB
mongoose.connection.openUri('mongodb://localhost')
const db = mongoose.connection;

//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//API endpoint
app.get('/', (req, res) => {
  res.send('API endpoint')
});

//start server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});