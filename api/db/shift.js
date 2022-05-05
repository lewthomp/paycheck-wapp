const { UserInputError } = require("apollo-server-express");
const { getDb, getNextSequence } = require("./db.js");

function validate(shift) {
  const errors = [];
  console.log(`-> Validating shift input`);
  console.log(shift.start.getTime());
  if (shift.start >= shift.end) {
    errors.push("The end of a shift must be after the start.");
  }
  if (shift.start.getDay() !== shift.end.getDay()) {
    errors.push(
      "The start and end Datetime for a shift must be on the same date!"
    );
  }
  if ((shift.end - shift.start) / (1000 * 60 * 60) < 1) {
    errors.push("It seems you entered a shift that lasted less than an hour.");
  }
  if (errors.length > 0) {
    throw new UserInputError("Invalid shift input(s)", { errors });
  }
}

async function list() {
  const db = getDb();
  const shifts = await db.collection("shifts").find({}).toArray();
  return shifts;
}

async function add(_, args) {
  const db = getDb();

  let shift = args.input;
  validate(shift);

  const newShift = Object.assign({}, shift);
  newShift.id = await getNextSequence("shifts");
  newShift.created = new Date();

  const result = await db.collection("shifts").insertOne(newShift);
  const savedShift = db
    .collection("shifts")
    .findOne({ _id: result.insertedId });

  return savedShift;
}

module.exports = { list, add };
