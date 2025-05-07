// src/hooks/useAuth.js
import { useState, useEffect } from 'react';

const loadUserFromLocalStorage = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const useAuth = () => {
  const [user, setUser] = useState(loadUserFromLocalStorage());
  const [loading, setLoading] = useState(true);

  // Подписываемся на события localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      const currentUser = loadUserFromLocalStorage();
      if (JSON.stringify(currentUser) !== JSON.stringify(user)) {
        setUser(currentUser);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    setTimeout(() => setLoading(false), 500);

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    window.dispatchEvent(new Event('storage')); // Ручное уведомление о изменении
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    window.dispatchEvent(new Event('storage'));
  };

  return { user, loading, login, logout };
};