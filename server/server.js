const fs = require('fs');
const express = require('express');
const bodyParser = require('path');
const { ApolloServer, UserInputError } = require('apollo-server-express');
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');


let aboutMessage = "paycheck API v1.0"

const app = express();
const port = process.env.PORT || 5000;


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
  });
  
app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
      `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
  });


app.use(express.static('public'));

app.listen(3000, function () {
    console.log('paycheck app started on port 3000')
})