const { UserInputError } = require("apollo-server-express");
const { getDb, getNextSequence } = require("./db.js");

function validate(user) {}

async function list() {
  const db = getDb();
}

async function add(_, args) {
  const db = getDb();
  const user = args.input;
}

module.exports = {};
