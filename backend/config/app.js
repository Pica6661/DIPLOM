const express = require('express');
const router = express.Router();

// Импорт всех маршрутов одним объектом
const routes = {
  product: require('../routes/productRoutes'),
  auth: require('../routes/authRoutes'),
  cart: require('../routes/cartRoutes'),
  contact: require('../routes/contactRoutes')
};

// Настройка маршрутов
router.use('/products', routes.product);
router.use('/auth', routes.auth);
router.use('/cart', routes.cart);
router.use('/contact', routes.contact);

module.exports = router;