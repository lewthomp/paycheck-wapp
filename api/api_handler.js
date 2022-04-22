require("dotenv").config();
const fs = require("fs");
const { ApolloServer } = require("apollo-server-express");

const resolvers = {
  Query: {},
  Mutation: {},
  // scalars
  date,
  time,
};
