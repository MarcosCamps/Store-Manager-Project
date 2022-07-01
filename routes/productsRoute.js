const express = require('express');
const productsController = require('../controllers/productsControllers');

const router = express.Router();

router.get('/:id', productsController.getById);
router.get('/', productsController.getAll);

module.exports = router;