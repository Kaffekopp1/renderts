import express from 'express';
import type { Request } from 'express';
import { request } from 'node:http';
import path from 'path';
const app = express();

app.use(express.json());
app.get('/api', (req: Request, res) => {
  res.send({ test: 'value' });
});

app.use(express.static(path.join(path.resolve(), 'dist')));

app.listen(3000, () => {
  console.log('Webbtjänsten kan nu ta emot anrop.');
});
