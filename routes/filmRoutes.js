const express = require('express');
const router = express.Router();
const filmController = require('../controllers/filmController');

router.get('/film', filmController.getAll);
router.get('/film/:id', filmController.getById);
router.post('/film', filmController.create);
router.put('/film/:id', filmController.updateById);
router.delete('/film/:id', filmController.deleteById);

module.exports = router;