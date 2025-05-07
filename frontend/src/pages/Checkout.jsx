import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Checkout() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Форма отправлена:', formData);
    alert('Заказ оформлен! Спасибо за покупку.');
    setFormData({ name: '', phone: '', address: '' });
  };

  return (
    <>
      <main className="checkout-page">
        <h1>Оформление заказа</h1>
        <form id="checkout-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Имя:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Телефон:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Адрес:</label>
            <textarea
              id="address"
              name="address"
              required
              value={formData.address}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Подтвердить заказ</button>
        </form>
      </main>
    </>
  );
}

export default Checkout;