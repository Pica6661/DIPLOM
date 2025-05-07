// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthModal from './AuthModal';
import { useAuth } from '../hooks/useAuth';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  // Добавляем слушатель localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      window.dispatchEvent(new Event('storage'));
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <header className="header">
      <div className="logo">SanTechShop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/cart">Корзина (<span id="cart-count">{0}</span>)</Link></li>

          {/* Показываем профиль только если пользователь залогинен */}
          {user && (
            <li><button onClick={() => navigate('/profile')}>Профиль</button></li>
          )}
        </ul>
      </nav>

      <div className="auth-buttons">
        {user ? (
          <button onClick={logout}>Выход</button>
        ) : (
          <button onClick={() => setIsAuthModalOpen(true)}>Войти</button>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}