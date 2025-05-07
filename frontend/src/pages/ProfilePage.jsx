// ProfilePage.jsx
import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <p>Доступ запрещён. Войдите в аккаунт.</p>;
  }

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="profile-page">
      <h1>Личный кабинет</h1>
      <div className="profile-info">
        <p><strong>Имя:</strong> {user.name || 'Не указано'}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>
      <button onClick={handleLogout}>Выйти</button>
    </div>
  );
}