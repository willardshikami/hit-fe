const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//connect to Mongoose Database
mongoose.connect('mongodb://shikami:shikami@ds129780.mlab.com:29780/techies');
mongoose.connection.once('open', () => {
  console.log('Connected to Database');
})

//Allow cross origin requests
app.use(cors());

app.use('/graphql', graphqlHTTP ({
  schema
}));

app.use('/', graphqlHTTP({endpointURL: '/graphql'}));

app.listen(process.env.PORT || 8080, () => {
  console.log('Server started successfully');
})