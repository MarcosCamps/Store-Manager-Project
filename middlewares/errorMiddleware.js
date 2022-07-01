const errorMiddleware = (error, req, res, next) => {
    res.status(404).send({ message: 'Product not found' });
  };
  
  module.exports = errorMiddleware;