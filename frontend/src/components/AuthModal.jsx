// src/components/AuthModal.jsx
import React, { useState } from 'react';
import PropTypes from 'prop-types';

// Импортируем отдельные функции из authService
import { loginUser, registerUser } from '../services/authService';
import { useAuth } from '../hooks/useAuth';

const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isLogin) {
        // Вход пользователя
        const res = await loginUser({
          email: formData.email,
          password: formData.password,
        });

        if (res && res.user) {
          login(res.user);
          onClose();
        }
      } else {
        // Регистрация пользователя
        await registerUser(formData);
        toggleForm(); // Переключаемся на форму входа после успешной регистрации
      }
    } catch (err) {
      setError('Произошла ошибка при авторизации. Попробуйте ещё раз.');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose} disabled={loading}>
          &times;
        </button>
        <h2>{isLogin ? 'Войти' : 'Регистрация'}</h2>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
              autoComplete="name"
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
            autoComplete="email"
          />
          <input
            type="password"
            name="password"
            placeholder="Пароль"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={loading}
            autoComplete={isLogin ? 'current-password' : 'new-password'}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Загрузка...' : isLogin ? 'Войти' : 'Зарегистрироваться'}
          </button>
        </form>

        <p className="toggle-link" onClick={toggleForm}>
          {isLogin ? 'Нет аккаунта? Зарегистрируйтесь' : 'Уже есть аккаунт? Войдите'}
        </p>
      </div>
    </div>
  );
};

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AuthModal;