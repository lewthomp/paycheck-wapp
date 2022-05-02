const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'A Date() type as a GraphQL scalar',
    serialize(value) {
      return value.toISOString();
    },
    parseValue(value) { 
      // for variable input
      const datetimeValue = new Date(value);
      return Number.isNaN(datetimeValue.getTime()) ? undefined : datetimeValue;
    },
    parseLiteral(ast) {
      // used for parsing in-place mutation query
      null
    }
    
})

module.exports = DateTime;