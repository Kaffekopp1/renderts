import express from 'express';
import type { Request } from 'express';
import { request } from 'node:http';

const app = express();

app.use(express.json());
app.get('/api', (req: Request, res) => {
  res.send({ test: 'value' });
});
app.get(
  '/:category/:product',
  (
    request: Request<
      { category: string; product: string }, // request.params
      { hello: string }, // response.send
      void, // request.body
      { order?: 'price-asc' | 'price-desc' } // request.query
    >,
    response
  ) => {
    console.log(request.params.product); // string
    console.log(request.query.order); // 'price-asc' | 'price-desc' | undefined
    response.send({ hello: 'World' });
  }
);

app.post(
  '/create-account',
  (
    request: Request<
      void, // request.params
      void, // response.send
      { password: string; userName: string }, // request.body
      void // request.query
    >,
    response
  ) => {
    console.log(request.body.userName); // string
    response.status(201).send();
  }
);

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});
