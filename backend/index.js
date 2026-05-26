import express from 'express';
import cors from 'cors';
import { request } from 'node:http';
const app = express();
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.send({ test: 'value' });
});
app.get('/:category/:product', (request, response) => {
  console.log(request.params.product); // string
  console.log(request.query.order); // 'price-asc' | 'price-desc' | undefined
  response.send({ hello: 'World' });
});
app.post('/create-account', (request, response) => {
  console.log(request.body.userName); // string
  response.status(201).send();
});
app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});
//# sourceMappingURL=index.js.map
