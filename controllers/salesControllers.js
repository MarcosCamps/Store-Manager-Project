const salesService = require('../services/salesService');

const addSale = async (req, res) => {
  const products = req.body;
  const sale = await salesService.addSale(products);
  res.status(201).json(sale);
};

module.exports = { addSale };