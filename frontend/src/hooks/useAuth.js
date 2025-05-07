// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const useAuth = () => {
  const [user, setUser] = useState(loadUserFromLocalStorage());
  const [loading, setLoading] = useState(true);

  // Подписка на событие storage
  useEffect(() => {
    const updateUser = () => {
      const currentUser = loadUserFromLocalStorage();
      if (currentUser !== user) {
        setUser(currentUser);
      }
    };

    window.addEventListener('storage', updateUser);
    setTimeout(() => setLoading(false), 500);

    return () => window.removeEventListener('storage', updateUser);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    window.dispatchEvent(new StorageEvent('storage')); // Уведомляем другие компоненты
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.dispatchEvent(new StorageEvent('storage'));
  };

  return { user, loading, login, logout };
};