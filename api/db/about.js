const DB = require('./db.js');

async function setMessage(_, { message }) {
  const db = DB.getDb();
  await db.about.removeOne({ id: 1 });
  // Only one message ever exists; id of 1
  const newMessage = { message, id: 1 };
  console.log(`adding message`);
  const result = await db.collection('about').insertOne(newMessage);
  const savedMessage = await db.collection('about').findOne({
    _id: result.insertedId
  }) ;
  return savedMessage
}

async function getMessage() {
  const db = DB.getDb();
  const messageArray = await db.collection('about').find({}).toArray();
  const messageObject = messageArray[0];
  const message = messageObject.message
  return message;
}

module.exports = { getMessage, setMessage };
