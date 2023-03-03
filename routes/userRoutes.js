const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);
router.post('/users', userController.create);
router.put('/users/:id', userController.updateById);
router.delete('/users/:id', userController.deleteById);
router.post('/usersteste', (req, res) => {
    const { username, password, email } = req.body;
  
    if (username === 'usuario' && password === 'senha') {
      res.send('Autenticado:'+email);
    } else {
      res.status(401).send('Usuário ou senha inválidos.');
    }
  });
module.exports = router;