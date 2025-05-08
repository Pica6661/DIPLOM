import React from 'react';

function Features() {
  const features = [
    {
      icon: "/images/icon-quality.jpg",
      title: "Высокое качество",
      description: "Только проверенные бренды и надежные материалы."
    },
    {
      icon: "/images/icon-delivery.jpg",
      title: "Быстрая доставка",
      description: "Доставляем товары по всей стране за 1-3 дня."
    },
    {
      icon: "/images/icon-support.jpg",
      title: "Профессиональная поддержка",
      description: "Наши специалисты помогут с выбором и установкой."
    }
  ];

  return (
    <section className="why-us">
      <h2>Почему выбирают нас?</h2>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;