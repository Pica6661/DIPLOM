// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const { fetchProducts, fetchProductById } = require('../controllers/productController');

router.get('/products', fetchProducts);
router.get('/products/:id', fetchProductById);

module.exports = router;