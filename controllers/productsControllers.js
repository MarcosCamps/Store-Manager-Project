const productsService = require('../services/productsService');

const getAll = async (_req, res, next) => {
  try {
    const data = await productsService.getAll();
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const getById = async (req, res) => {
  const { id } = req.params;
  const dataId = await productsService.getById(id);
  if (dataId.length === 0) {
    res.status(404).json({ message: 'Product not found' });
  }
  res.status(200).json(dataId[0]);
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({
      message: '"name" is required',
    });
  }
  if (name.length < 5) {
    return res.status(422).json({
      message: '"name" length must be at least 5 characters long',
    });
  }
  const product = await productsService.addProduct({ name });
  if (product) {
    return res.status(201).send({
      id: product.id, name,
    });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const exists = await productsService.getById(id);
  if (exists.length === 0) {
    return res.status(404).json({
      message: 'Product not found',
    });
  }
  await productsService.deleteProduct(id);
  return res.status(204).end();
};

module.exports = { getAll, getById, addProduct, deleteProduct };