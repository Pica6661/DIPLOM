import React from 'react';

function Offers() {
  const offers = [
    {
      image: "/images/offer1.jpg",
      title: "Скидка 20% на смесители",
      description: "Только до конца месяца!"
    },
    {
      image: "/images/offer2.jpg",
      title: "Новые душевые системы",
      description: "Гидромассаж и тропический душ."
    },
    {
      image: "/images/offer3.jpg",
      title: "Распродажа ванн",
      description: "Скидки до 30% на популярные модели."
    }
  ];

  return (
    <section className="special-offers">
      <h2>Акции и специальные предложения</h2>
      <div className="offer-grid">
        {offers.map((offer, index) => (
          <div key={index} className="offer-card">
            <img src={offer.image} alt={offer.title} />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Offers;