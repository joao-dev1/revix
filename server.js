const express = require('express');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const userRoutes = require('./routes/userRoutes');
const filmRoutes = require('./routes/filmRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.use('/auth', authRouter);
app.use('/', userRoutes);
app.use('/', filmRoutes);
app.use('/', reviewRoutes);

app.listen(3001, () => {
  console.log('API rodando na porta 3000.');
});
