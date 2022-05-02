const { UserInputError } = require("apollo-server-express");
const { getDb, getNextSequence } = require("./db.js");

// TODO
function validate(payrate) {
  const errors = [];
}

async function list(_, args) {
  const db = getDb();
  const payrates = await db.collection("payrates").find({}).toArray();
  return payrates;
}

async function add(_, { rates }) {}

module.exports = { list };
