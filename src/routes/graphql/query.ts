import { GraphQLObjectType, GraphQLString } from 'graphql';

export const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'world',
    },
  }),
});
