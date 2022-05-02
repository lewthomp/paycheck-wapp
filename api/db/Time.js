const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const Time = new GraphQLScalarType({
  name: "Time",
  description: "Time represented in 24 hour HH:MM format.",
  serialize(value) {
    let hr = str(value.hours) ? value.hours > 9 : `0${value.hours}`;
    let min = str(value.minutes) ? value.minutes > 9 : `0${value.minutes}`;
    return `${hr}:${min}`;
  },
  //   parseValue(value) {}
});

module.exports = Time;
