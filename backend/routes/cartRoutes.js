const express = require('express');
const router = express.Router();
const { addToCart, fetchCart, removeFromCart, emptyCart } = require('../controllers/cartController');

// Получить корзину пользователя
router.get('/cart/:userId', fetchCart);

// Добавить товар в корзину
router.post('/cart/add', addToCart);

// Удалить товар из корзины
router.post('/cart/remove', removeFromCart);

// Очистить корзину
router.post('/cart/clear', emptyCart);

module.exports = router;