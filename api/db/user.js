const { getDb, getNextSequence } = require("./db.js");

async function get(_, { id }) {
  const db = getDb();
  const user = await db.collections("users").findOne({ id });
  return user;
}

async function list(_, args) {
  const db = getDb();
  const users = await db.collections("users").find({}).toArray();
  return users;
}

async function create(_, args) {
  const db = getDb();
}

module.exports = { list };
