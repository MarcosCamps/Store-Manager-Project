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
  const product = await productsService.addProduct({ name });
  console.log(product);
  if (product) return res.status(201).send({ id: product.id, name });
};

module.exports = { getAll, getById, addProduct };