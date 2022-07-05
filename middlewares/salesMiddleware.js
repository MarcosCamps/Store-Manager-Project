const productsModels = require('../models/productsModels');

const validateProducts = (req, res, next) => {
  const products = req.body;
  products.forEach(({ productId, quantity }) => {
    if (!productId) return next({ message: '"productId" is required', status: 400 });
    if (quantity < 1) { 
      return next({
        message: '"quantity" must be greater than or equal to 1', status: 422,
      });
    } 
    if (!quantity) return next({ message: '"quantity" is required', status: 400 });
  });
  next();
};

const verifyProductExists = async (req, res, next) => {
  const products = req.body;
  const allProducts = await productsModels.getAll();
  const allProductsIds = allProducts.map((el) => el.id);
  const ifAllProductsExists = products.some((el) => !allProductsIds.includes(el.productId));
  if (ifAllProductsExists) return next({ message: 'Product not found', status: 404 });
  return next();
};

module.exports = { validateProducts, verifyProductExists };

// Identificar o tipo de dado que eu recebo 
// Saber o que tem que retornar 
