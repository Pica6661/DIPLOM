import React from 'react';

function Reviews() {
  const reviews = [
    {
      text: "Отличный магазин! Купил смеситель Grohe, работает как часы.",
      author: "— Иван Петров"
    },
    {
      text: "Заказал душевую кабину, доставили быстро, все качественно.",
      author: "— Мария Сидорова"
    },
    {
      text: "Прекрасный сервис и широкий ассортимент. Рекомендую!",
      author: "— Алексей Кузнецов"
    }
  ];

  return (
    <section className="reviews">
      <h2>Отзывы наших клиентов</h2>
      <div className="review-slider">
        {reviews.map((review, index) => (
          <div key={index} className="review">
            <p>"{review.text}"</p>
            <p className="author">{review.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;