require("dotenv").config();
const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");

const DateTime = require('./db/DateTime.js')
const about = require('./db/about.js');
const shift = require('./db/shift.js');
const rates = require('./db/rates.js');

const resolvers = {
  Query: {
    about: about.getMessage,
    shiftList: shift.add,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    shiftAdd: shift.add,
    setRates: rates.setRates,
  },
  DateTime
};

const apolloServer = new ApolloServer({
  typeDefs: fs.readFileSync('db/schema.graphql', 'utf-8'),
  resolvers,
  introspection: true,
  formatError: (error) => {
    console.log(error);
    return error;
  },
});

function installHandler(app) {
  const enableCors = (process.env.ENABLE_CORS || 'true') === 'true';
  console.log('CORS setting:', enableCors);
  // install api middleware
  apolloServer.applyMiddleware({ app, path: '/graphql', cors: enableCors });
}

module.exports = { installHandler, apolloServer };