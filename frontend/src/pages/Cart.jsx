// Cart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';

function Cart() {
  const { cart, cartCount, totalPrice, removeFromCart, updateQuantity } = useCart();

  if (cart.length === 0) {
    return <main className="cart-page"><h1>Корзина</h1><p>Ваша корзина пуста</p></main>;
  }

  return (
    <main className="cart-page">
      <h1>Корзина</h1>
      <div id="cart-items">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Цена: {item.price.toLocaleString()} ₽</p>
              <p>
                Количество:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                />
              </p>
            </div>
            <div className="item-actions">
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Удалить</button>
            </div>
          </div>
        ))}

        <div id="total-price">
          <p>Итого: {totalPrice.toLocaleString()} ₽</p>
          <a href="/checkout" className="submit-btn">Оформить заказ</a>
        </div>
      </div>
    </main>
  );
}

export default Cart;
