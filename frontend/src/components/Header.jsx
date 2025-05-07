// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthModal from './AuthModal';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
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

          {/* Показываем профиль только если пользователь вошёл */}
          {user && (
            <li><button onClick={() => navigate('/profile')}>Профиль</button></li>
          )}
        </ul>
      </nav>

      <div className="auth-buttons">
        {user ? (
          <button onClick={logout}>Выйти</button>
        ) : (
          <button onClick={() => setIsAuthModalOpen(true)}>Войти</button>
        )}
      </div>

      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </header>
  );
}