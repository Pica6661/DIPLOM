const { getCartByUserId, addItemToCart, removeItemFromCart, clearCart } = require('../models/cartModel');
const { useAuth } = require('../../hooks/useAuth'); // или используй JWT

const fetchCart = async (req, res) => {
  const { userId } = req.params;

  try {
    const cartItems = await getCartByUserId(userId);
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка загрузки корзины' });
  }
};

const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    const item = await addItemToCart(userId, productId, quantity);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Ошибка добавления в корзину' });
  }
};

const removeFromCart = async (req, res) => {
  const { userId, productId } = req.body;

  try {
    await removeItemFromCart(userId, productId);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка удаления из корзины' });
  }
};

const emptyCart = async (req, res) => {
  const { userId } = req.body;

  try {
    await clearCart(userId);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Ошибка очистки корзины' });
  }
};

module.exports = { fetchCart, addToCart, removeFromCart, emptyCart };