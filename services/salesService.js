const salesModels = require('../models/salesModels');

const addSale = async (products) => {
  const saleId = await salesModels.addSale();
  console.log(saleId);
  const promisses = products
    .map(({ productId, quantity }) => salesModels.sentSale(saleId, productId, quantity));
  await Promise.all(promisses);
  return { id: saleId, itemsSold: products };
};

module.exports = { addSale };