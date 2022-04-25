const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');


// TODO
function validate(shift) {
  const errors = [];
  // end time must be later than start time
  
}

async function list() {
  const db = getDb();
  const shifts = await db.collection('shifts').find({}).toArray();
  return shifts;
}

async function add(_, { shift }) {
  const db = getDb();
  validate(shift);

  const newShift = Object.assign({}, shift);
  newShift.id = await getNextSequence('shifts');
  const result = await db.collection('shifts').insertOne(newShift);
  // return new shift pulled from database
  const savedShift = db.collection('shifts').findOne({ _id: result.insertedId });
  return savedShift;
}

module.exports = { list, add };
