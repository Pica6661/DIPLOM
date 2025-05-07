import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Эмуляция отправки данных
    console.log('Отправленные данные:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    // Очистка формы
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <main className="contacts-page">
        {/* Герой-секция */}
        <section className="contact-hero">
          <div className="hero-content">
            <h1>Контакты</h1>
            <p>Свяжитесь с нами любым удобным способом</p>
          </div>
        </section>

        {/* Контактная информация */}
        <section className="contact-info">
          <div className="info-block">
            <h2>Адрес</h2>
            <p>г. Москва, ул. Ленина, д. 45</p>
            <p>БЦ "Сантехника", офис 12</p>
          </div>

          <div className="info-block">
            <h2>Телефон</h2>
            <p><a href="tel:+74951234567">+7 (495) 123-45-67</a></p>
            <p><a href="tel:+79261234567">+7 (926) 123-45-67</a></p>
          </div>

          <div className="info-block">
            <h2>Email</h2>
            <p><a href="mailto:info@santehmarket.ru">info@santehmarket.ru</a></p>
            <p><a href="mailto:support@santehmarket.ru">support@santehmarket.ru</a></p>
          </div>

          <div className="info-block">
            <h2>График работы</h2>
            <p>Пн-Пт: 09:00 - 18:00</p>
            <p>Сб: 10:00 - 16:00</p>
            <p>Вс: выходной</p>
          </div>
        </section>

        {/* Карта */}
        <section className="map-section">
          <h2>Как нас найти</h2>
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.946445509315!2d37.61729991581193!3d55.75582649732489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCwLCDQnNC-0YHQutCy0LAsINCh0LDQvdGC0LXQsdC60LAg0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1698765432109!5m2!1sru!2sru" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта"
            ></iframe>
          </div>
        </section>

        {/* Форма обратной связи */}
        <section className="contact-form">
          <h2>Напишите нам</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="input-group">
              <label htmlFor="name">Имя</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="message">Сообщение</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">Отправить</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Contacts;