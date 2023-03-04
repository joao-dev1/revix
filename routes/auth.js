const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
  const { name, password } = req.body;

  if (name === 'usuario' && password === 'senha') {
    res.send('Autenticado com sucesso!');
  } else {
    res.status(401).send('Usuário ou senha inválidos.');
  }
});

module.exports = router;