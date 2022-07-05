const connection = require('./connection');

const saleModel = {
  addSale: async () => {
    const query = 'INSERT INTO StoreManager.sales (date) VALUES (NOW());';
    const [{ insertId }] = await connection.execute(query);
    return insertId;
  },
  sentSale: async (saleId, productId, quantity) => {
    const query = `INSERT INTO StoreManager.sales_products
     (sale_id, product_id, quantity) VALUES (?, ?, ?);`;
    await connection.execute(query, [saleId, productId, quantity]);
    return { productId, quantity };
  },
  getAll: async () => {
    const query = `SELECT sp.sale_id AS saleId, ss.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS ss
    INNER JOIN StoreManager.sales_products as sp ON ss.id = sp.sale_id
    ORDER BY saleId, productId;`;
    const [sales] = await connection.execute(query);
    return sales;
  },
  getById: async (id) => {
    const query = `SELECT ss.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales AS ss
    INNER JOIN StoreManager.sales_products as sp ON ss.id = sp.sale_id 
    WHERE sale_id = ?;`;
    const [sales] = await connection.execute(query, [id]);
    // console.log(sales);
    return sales;
  },
};

module.exports = saleModel;