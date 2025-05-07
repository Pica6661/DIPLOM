// src/services/authService.js
export const loginUser = async ({ email, password }) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Имитация успешного ответа
      resolve({
        success: true,
        user: {
          id: Date.now(),
          name: 'Иван',
          email,
        },
      });
    }, 800);
  });
};

export const registerUser = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Сохраняем пользователя в localStorage
      localStorage.setItem('user', JSON.stringify(userData));
      resolve({ success: true, user: userData });
    }, 800);
  });
};