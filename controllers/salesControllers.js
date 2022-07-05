const salesService = require('../services/salesService');

const addSale = async (req, res) => {
  const products = req.body;
  const sale = await salesService.addSale(products);
  res.status(201).json(sale);
};
const getAll = async (_req, res) => {
  const data = await salesService.getAll();
  if (!data) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(data);
};
const getById = async (req, res) => {
  const { id } = req.params;
  const dataId = await salesService.getById(id);
  if (!dataId || dataId.length === 0) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  return res.status(200).json(dataId);
};

module.exports = { addSale, getAll, getById };