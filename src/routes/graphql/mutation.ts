import { GraphQLObjectType, GraphQLString } from 'graphql';

export const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    hello: {
      type: GraphQLString,
      resolve: () => 'world',
    },
  }),
});
