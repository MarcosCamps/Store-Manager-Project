const productsModel = require('../models/productsModels');

const getAll = async () => {
  const data = await productsModel.getAll();
  return data;
}

const getById = async (id) => {
  const data = await productsModel.getById(id);
  return data;
}

module.exports = {getAll, getById};