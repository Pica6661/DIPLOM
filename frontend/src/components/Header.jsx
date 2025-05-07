import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Header() {
  const { cartCount } = useCart();

  return (
    <header className="header">
      <div className="logo">СантехМаркет</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/cart">Корзина (<span id="cart-count">{cartCount}</span>)</Link></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button>Вход</button>
        <button>Регистрация</button>
      </div>
    </header>
  );
}

export default Header;