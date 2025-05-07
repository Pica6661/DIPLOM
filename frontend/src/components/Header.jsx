// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';

export default function Header() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">SanTechShop</div>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/catalog">Каталог</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
          <li><Link to="/cart">Корзина</Link></li>
        </ul>
      </nav>

      <div className="auth-buttons">
        <button onClick={() => setIsAuthModalOpen(true)}>Войти</button>
      </div>

      {/* Модальное окно авторизации */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}