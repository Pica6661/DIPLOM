// backend/models/productModel.js
const db = require('../config/db');

const getProducts = async () => {
  const result = await db.query('SELECT * FROM products');
  return result.rows;
};

const getProductById = async (id) => {
  const result = await db.query('SELECT * FROM products WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = { getProducts, getProductById };