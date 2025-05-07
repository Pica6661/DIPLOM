// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Страницы
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Product from './pages/Product';
import ProfilePage from './pages/ProfilePage';

// Компоненты
import Header from './components/Header';
import Footer from './components/Footer';

// Роуты
import ProtectedRoute from './routes/ProtectedRoute'; // ✅ Теперь с правильным путём

function App() {
  return (
    <>
      <Header />
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Защищённый маршрут */}
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;