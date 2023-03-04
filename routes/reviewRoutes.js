const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');

router.get('/review', reviewController.getAll);
router.get('/review/:id', reviewController.getById);
router.post('/review', reviewController.create);
router.put('/review/:id', reviewController.updateById);
router.delete('/review/:id', reviewController.deleteById);

module.exports = router;