require("dotenv").config();
const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");
const { ApolloCore } = require("apollo-server-core");

// Data structures
const DateTime = require("./db/DateTime.js");
const Time = require("./db/Time.js");

const about = require("./db/about.js");
const shift = require("./db/shift.js");
const payrate = require("./db/payrate.js");

// GraphQL POST request resolvers
const resolvers = {
  Query: {
    about: about.getMessage,
    shiftList: shift.list,
    payrateList: payrate.list,
  },
  Mutation: {
    setAboutMessage: about.setMessage,
    addShift: shift.add,
  },
  DateTime,
};

// Apply GraphQL Middleware
const apolloServer = new ApolloServer({
  typeDefs: fs.readFileSync("db/schema.graphql", "utf-8"),
  resolvers,
  introspection: true,
  formatError: (error) => {
    console.log(`# Error occured in apollo server`, error);
    return error;
  },
});

// Handle apollo middleware installation when passed express server app
function graphqlInstaller(app) {
  const enableCors = (process.env.ENABLE_CORS || "true") === "true";
  console.log("CORS setting:", enableCors);
  // install api middleware
  apolloServer.applyMiddleware({ app, path: "/graphql", cors: enableCors });
}

module.exports = { graphqlInstaller, apolloServer };
