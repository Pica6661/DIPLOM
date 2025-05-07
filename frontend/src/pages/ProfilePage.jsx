// src/ProfilePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from "../hooks/useAuth"; // Выходим из /pages в /src

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <p>Для просмотра профиля необходимо войти.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Личный кабинет</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Имя:</strong> {user.name || 'Не указано'}</p>

      <button onClick={() => {
        logout();
        navigate('/');
      }}>
        Выйти
      </button>
    </div>
  );
}