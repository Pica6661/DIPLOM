// src/pages/ProfilePage.jsx
import React from 'react';
import { useAuth } from "../hooks/useAuth";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  if (!user) {
    return <p>Доступ запрещён. Войдите в аккаунт.</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Личный кабинет</h1>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Имя:</strong> {user.name || 'Не указано'}</p>

      <button onClick={logout}>Выйти</button>
    </div>
  );
}