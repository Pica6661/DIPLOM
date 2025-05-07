const db = require('../config/db');

// Получить корзину пользователя
const getCartByUserId = async (userId) => {
  const result = await db.query(
    `SELECT ci.*, p.name, p.price, p.image_url 
     FROM cart_items ci
     JOIN products p ON ci.product_id = p.id
     WHERE ci.user_id = $1`,
    [userId]
  );
  return result.rows;
};

// Добавить товар в корзину
const addItemToCart = async (userId, productId, quantity = 1) => {
  const result = await db.query(
    `INSERT INTO cart_items (user_id, product_id, quantity)
     VALUES ($1, $2, $3)
     ON CONFLICT (user_id, product_id)
     DO UPDATE SET quantity = EXCLUDED.quantity
     RETURNING *`,
    [userId, productId, quantity]
  );
  return result.rows[0];
};

// Удалить товар из корзины
const removeItemFromCart = async (userId, productId) => {
  await db.query(
    'DELETE FROM cart_items WHERE user_id = $1 AND product_id = $2',
    [userId, productId]
  );
};

// Очистить корзину
const clearCart = async (userId) => {
  await db.query('DELETE FROM cart_items WHERE user_id = $1', [userId]);
};

module.exports = { getCartByUserId, addItemToCart, removeItemFromCart, clearCart };