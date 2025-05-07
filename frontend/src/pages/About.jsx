import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <>
      <main className="about-page">
        {/* Герой-секция */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>О нас</h1>
            <p>Мы — команда профессионалов, предлагающая лучшие решения для вашего дома.</p>
          </div>
        </section>

        {/* Наша история и миссия */}
        <section className="about-content">
          <div className="about-text">
            <h2>Наша история</h2>
            <p>
              СантехМаркет был основан в 2015 году с целью предоставить клиентам доступ к 
              высококачественной сантехнике от ведущих мировых производителей. За годы работы 
              мы зарекомендовали себя как надежного партнера для тысяч клиентов по всей стране.
            </p>
            
            <h2>Наша миссия</h2>
            <p>
              Мы стремимся сделать ваш дом комфортным и современным. Наша цель — предлагать 
              только проверенные товары, которые соответствуют высочайшим стандартам качества.
            </p>
            
            <h2>Почему выбирают нас?</h2>
            <ul className="advantages-list">
              <li>Широкий ассортимент товаров</li>
              <li>Гарантия качества от производителя</li>
              <li>Доставка по всей стране</li>
              <li>Профессиональная поддержка клиентов</li>
              <li>Лучшие цены на рынке</li>
            </ul>
          </div>

          <div className="about-gallery">
            <img src="/images/about1.jpg" alt="Команда СантехМаркет" />
            <img src="/images/about2.jpg" alt="Наши офисы" />
            <img src="/images/about3.jpg" alt="Производственные мощности" />
          </div>
        </section>

        {/* Наша команда */}
        <section className="team-section">
          <h2>Наша команда</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/images/team1.jpg" alt="Иван Иванов" />
              <div className="member-info">
                <h3>Иван Иванов</h3>
                <p>Генеральный директор</p>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/team2.jpg" alt="Мария Петрова" />
              <div className="member-info">
                <h3>Мария Петрова</h3>
                <p>Менеджер по работе с клиентами</p>
              </div>
            </div>
            <div className="team-member">
              <img src="/images/team3.jpg" alt="Алексей Сидоров" />
              <div className="member-info">
                <h3>Алексей Сидоров</h3>
                <p>Технический специалист</p>
              </div>
            </div>
          </div>
        </section>

        {/* Наши ценности */}
        <section className="values-section">
          <h2>Наши ценности</h2>
          <div className="values-list">
            <div className="value-item">
              <h3>Качество</h3>
              <p>Мы тщательно проверяем каждый товар перед отправкой клиенту.</p>
            </div>
            <div className="value-item">
              <h3>Надежность</h3>
              <p>Мы сотрудничаем только с проверенными брендами и производителями.</p>
            </div>
            <div className="value-item">
              <h3>Инновации</h3>
              <p>Мы постоянно обновляем ассортимент, чтобы предлагать современные решения.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;