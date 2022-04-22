const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

// async function list() {
//   const db = getDb();
//   const shifts = await db.collection('shifts').find({}).toArray();
//   return shifts;
// }

// TODO
function validate(shift) {
  const errors = [];
}

async function add(_, { shift }) {
  const db = getDb();
  validate(shift);

  const newShift = Object.assign({}, shift);
  newIssue.id = await getNextSequence('shifts');
  const result = await db.collection('shifts').insertOne(newShift);
  
  const savedShift = db.collection('shifts').findOne({ _id: result.insertedId });
  return savedShift;
}

module.exports = { add };
