const express = require('express');
const salesController = require('../controllers/salesControllers');
const salesMiddleware = require('../middlewares/salesMiddleware');

const router = express.Router();

router.post('/',
  salesMiddleware.validateProducts, salesMiddleware.verifyProductExists, salesController.addSale);

module.exports = router;