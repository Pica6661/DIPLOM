const express = require('express');
const router = express.Router();

// Импорт маршрутов
const productRoutes = require('../routes/productRoutes');
const authRoutes = require('../routes/authRoutes');
const cartRoutes = require('../routes/cartRoutes');
const contactRoutes = require('../routes/contactRoutes');

module.exports = {
  routes: () => {
    router.use('/products', productRoutes);
    router.use('/auth', authRoutes);
    router.use('/cart', cartRoutes);
    router.use('/contact', contactRoutes);
    return router;
  }
};