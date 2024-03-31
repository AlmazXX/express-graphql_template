import cors from 'cors';
import express from 'express';
import { port } from './config/config';
import graphqlRouter from './routes/graphql';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/graphql', graphqlRouter);

app.listen(port, () => {
  console.log('We are at port %d', port);
});
