const productsModel = require('../models/productsModels');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
};

const getById = async (id) => {
  const data = await productsModel.getById(id);
  return data;
};

const addProduct = async (name) => {
  const data = await productsModel.addProduct(name);
  return data;
};

const deleteProduct = async (id) => {
  await productsModel.deleteProduct(id);
};

module.exports = { getAll, getById, addProduct, deleteProduct };