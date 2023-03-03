const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');

const app = express();

app.use(bodyParser.json());

app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log('API rodando na porta 3000.');
});