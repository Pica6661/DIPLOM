const db = require('../config/db');

class Cart {
  /**
   * Получить корзину пользователя
   * @param {number} userId - ID пользователя
   * @returns {Promise<Array>} Массив товаров в корзине
   */
  static async getByUserId(userId) {
    try {
      const { rows } = await db.query(
        `SELECT 
          ci.id,
          ci.quantity,
          p.id as product_id,
          p.name,
          p.price,
          p.image_url,
          (p.price * ci.quantity) as total_price
        FROM cart_items ci
        JOIN products p ON ci.product_id = p.id
        WHERE ci.user_id = $1`,
        [userId]
      );
      return rows;
    } catch (error) {
      throw new Error(`Ошибка при получении корзины: ${error.message}`);
    }
  }

  /**
   * Добавить товар в корзину
   * @param {number} userId - ID пользователя
   * @param {number} productId - ID товара
   * @param {number} [quantity=1] - Количество
   * @returns {Promise<Object>} Добавленный товар
   */
  static async addItem(userId, productId, quantity = 1) {
    try {
      // Проверяем, есть ли уже товар в корзине
      const existingItem = await db.query(
        `SELECT id, quantity FROM cart_items 
         WHERE user_id = $1 AND product_id = $2`,
        [userId, productId]
      );

      if (existingItem.rows.length > 0) {
        // Обновляем количество, если товар уже в корзине
        const { rows } = await db.query(
          `UPDATE cart_items 
           SET quantity = quantity + $1
           WHERE id = $2
           RETURNING *`,
          [quantity, existingItem.rows[0].id]
        );
        return rows[0];
      } else {
        // Добавляем новый товар
        const { rows } = await db.query(
          `INSERT INTO cart_items (user_id, product_id, quantity)
           VALUES ($1, $2, $3)
           RETURNING *`,
          [userId, productId, quantity]
        );
        return rows[0];
      }
    } catch (error) {
      throw new Error(`Ошибка при добавлении в корзину: ${error.message}`);
    }
  }

  /**
   * Удалить товар из корзины
   * @param {number} userId - ID пользователя
   * @param {number} itemId - ID элемента корзины
   * @returns {Promise<void>}
   */
  static async removeItem(userId, itemId) {
    try {
      await db.query(
        `DELETE FROM cart_items 
         WHERE id = $1 AND user_id = $2`,
        [itemId, userId]
      );
    } catch (error) {
      throw new Error(`Ошибка при удалении из корзины: ${error.message}`);
    }
  }

  /**
   * Очистить корзину пользователя
   * @param {number} userId - ID пользователя
   * @returns {Promise<void>}
   */
  static async clearCart(userId) {
    try {
      await db.query(
        `DELETE FROM cart_items 
         WHERE user_id = $1`,
        [userId]
      );
    } catch (error) {
      throw new Error(`Ошибка при очистке корзины: ${error.message}`);
    }
  }

  /**
   * Обновить количество товара в корзине
   * @param {number} userId - ID пользователя
   * @param {number} itemId - ID элемента корзины
   * @param {number} newQuantity - Новое количество
   * @returns {Promise<Object>} Обновленный элемент
   */
  static async updateQuantity(userId, itemId, newQuantity) {
    try {
      const { rows } = await db.query(
        `UPDATE cart_items 
         SET quantity = $1
         WHERE id = $2 AND user_id = $3
         RETURNING *`,
        [newQuantity, itemId, userId]
      );
      return rows[0];
    } catch (error) {
      throw new Error(`Ошибка при обновлении количества: ${error.message}`);
    }
  }
}

module.exports = Cart;