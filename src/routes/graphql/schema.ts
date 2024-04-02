import { GraphQLSchema } from 'graphql';
import { mutation } from './mutation';
import { query } from './query';
import {
  ErrorPayloadType,
  SuccessMutationPayloadType,
  SuccessQueryPayloadType,
} from './types/util-types/payload';

export const schema = new GraphQLSchema({
  query,
  mutation,
  types: [
    SuccessMutationPayloadType,
    SuccessQueryPayloadType,
    ErrorPayloadType,
  ],
});
