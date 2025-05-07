const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
  try {
    const cartItems = await Cart.getByUserId(req.user.id);
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const item = await Cart.addItem(req.user.id, productId, quantity);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Добавьте этот недостающий метод
exports.removeFromCart = async (req, res) => {
  try {
    await Cart.removeItem(req.user.id, req.params.id);
    res.json({ message: 'Товар удален из корзины' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Дополнительные методы (по желанию)
exports.updateCartItem = async (req, res) => {
  try {
    const { quantity } = req.body;
    const updatedItem = await Cart.updateQuantity(req.user.id, req.params.id, quantity);
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.clearCart = async (req, res) => {
  try {
    await Cart.clearCart(req.user.id);
    res.json({ message: 'Корзина очищена' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};