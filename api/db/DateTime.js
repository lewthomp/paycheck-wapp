const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');

const DateTime = new GraphQLScalarType({
    name: 'DateTime',
    description: 'A Date() type as a GraphQL scalar',
    serialize(value) {
      return value.toISOString();
    },
    parseValue(value) {
      const dateValue = new Date(value);
      return Number.isNaN(dateValue.getTime()) ? undefined : dateValue;
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.STRING) {
        const value = new Date(ast.value);
        return Number.isNaN(value.getTime()) ? undefined : value;
      }
      return undefined;
    },
})

module.exports = DateTime;