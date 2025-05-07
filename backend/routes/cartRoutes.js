const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const authMiddleware = require('../middleware/authMiddleware');

// Получить корзину
router.get('/', authMiddleware, cartController.getCart);

// Добавить товар в корзину
router.post('/', authMiddleware, cartController.addToCart);

// Удалить товар из корзины
router.delete('/:id', authMiddleware, cartController.removeFromCart);

// Обновить количество товара (опционально)
router.put('/:id', authMiddleware, cartController.updateCartItem);

// Очистить корзину (опционально)
router.delete('/', authMiddleware, cartController.clearCart);

module.exports = router;