// Header.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../hooks/useAuth';
import AuthModal from './AuthModal';

function Header() {
  const { cartCount } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
          
          {/* Показываем ссылку на профиль, если пользователь авторизован */}
          {user && (
            <li><Link to="/profile">Профиль</Link></li>
          )}
        </ul>
      </nav>

      <div className="auth-buttons">
        {user ? (
          <button onClick={handleLogout}>Выйти</button>
        ) : (
          <button onClick={() => setIsAuthModalOpen(true)}>Войти</button>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}

export default Header;