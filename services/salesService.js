const salesModels = require('../models/salesModels');

const addSale = async (products) => {
  const saleId = await salesModels.addSale();
  console.log(saleId);
  const promisses = products
    .map(({ productId, quantity }) => salesModels.sentSale(saleId, productId, quantity));
  await Promise.all(promisses);
  return { id: saleId, itemsSold: products };
};
const getAll = async () => {
  const data = await salesModels.getAll();
  return data;
};

const getById = async (id) => {
  const data = await salesModels.getById(id);
  return data;
};

module.exports = { addSale, getAll, getById };