const express = require('express');
const salesController = require('../controllers/salesControllers');
const salesMiddleware = require('../middlewares/salesMiddleware');

const router = express.Router();

router.post('/',
  salesMiddleware.validateProducts, salesMiddleware.verifyProductExists, salesController.addSale);
router.get('/:id', salesController.getById);
router.get('/', salesController.getAll);

module.exports = router;