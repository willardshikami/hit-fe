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
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Server started at port 4000');
})