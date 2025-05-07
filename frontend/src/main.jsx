import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Для маршрутизации
import { CartProvider } from './context/CartContext'; // Глобальное состояние корзины
import App from './App'; // Главный компонент
import './index.css'; // Глобальные стили

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);