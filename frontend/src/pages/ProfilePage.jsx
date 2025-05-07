// src/pages/ProfilePage.jsx
import React from 'react';
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  if (!user) {
    return <p>Доступ запрещён. Пожалуйста, войдите в аккаунт.</p>;
  }

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Личный кабинет</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Имя:</strong> {user.name || 'Не указано'}</p>
      <button onClick={() => {
        logout();
        navigate('/');
      }}>Выйти</button>
    </div>
  );
}