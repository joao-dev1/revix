const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const app = express();


app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/', userRoutes);
app.listen(3000, () => {
  console.log('API rodando na porta 3000.');
});