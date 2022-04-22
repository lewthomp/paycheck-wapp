const { UserInputError } = require('apollo-server-express');
const { getDb, getNextSequence } = require('./db.js');

// TODO
function validate(rates) {
  const errors = [];
}

async function setRates(_, { rates }) {
  const db = getDb();
  validate(rates);
  
  let savedShift;
  // TODO

  return savedShift;
}

module.exports = { setRates };
