// backend/controllers/productController.js
const { getProducts, getProductById } = require('../models/productModel');

const fetchProducts = async (req, res) => {
  try {
    const products = await getProducts();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки товаров' });
  }
};

const fetchProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductById(id);
    if (!product) return res.status(404).json({ error: 'Товар не найден' });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки товара' });
  }
};

module.exports = { fetchProducts, fetchProductById };