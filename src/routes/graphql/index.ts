import { Router } from 'express';
import { graphql } from 'graphql';
import { schema } from './schema';

const graphqlRouter = Router();

graphqlRouter.post('/', async (req, res) => {
  const { query: source, variables: variableValues } = req.body;

  const responce = await graphql({
    schema,
    source,
    variableValues,
    rootValue: {},
    contextValue: {},
  });
  res.send(responce);
});

export default graphqlRouter;
