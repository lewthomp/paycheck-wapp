const message = "paycheck api v1.0";

function setMessage(_, { message }) {
  aboutMessage = message;
  return aboutMessage;
}

function getMessage() {
  return message;
}

module.exports = { getMessage, setMessage };
