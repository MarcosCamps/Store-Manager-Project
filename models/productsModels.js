const connections = require('./connections');

const getAll = async ()  => {
  const query = 'SELECT * FROM StoreManager.products;';
  const [data] = await connections.execute(query);
  return data;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id=?;';
  const [data] = await connections.execute(query, [id]);
  return data;
}

module.exports = {getAll, getById}