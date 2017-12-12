const express = require('express');
const path = require('path')
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

const api = require('./routes/api');

//init app var for express
const app = express();

//port var
const port = 3000;

//linking to clientside
app.use(express.static(path.join(__dirname, 'app')));

//connecting to DB
mongoose.connection.openUri(config.database);
mongoose.connection.on('connected', () => {
  console.log('connected to database ' +config.database);
});

//checking for errors in DB
mongoose.connection.openUri(config.database);
mongoose.connection.on('error', (err) => {
  console.log('Database error' +err);
});


//cors middleware
app.use(cors());

//body parser middleware
app.use(bodyParser.json());

//api route
app.use('/api', api);

//API endpoint
app.get('/', (req, res) => {
  res.send('API endpoint')
});

//start server
app.listen(port, () => {
  console.log('Server started on port ' + port);
});