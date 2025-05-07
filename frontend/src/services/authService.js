// src/services/authService.js
export const registerUser = async (userData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        localStorage.setItem('user', JSON.stringify({ id: Date.now(), ...userData }));
        resolve({ success: true, user: userData });
      }, 800);
    });
  };
  
  export const loginUser = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = { id: 1, email, name: 'Иван' };
        resolve({ success: true, user });
      }, 800);
    });
  };