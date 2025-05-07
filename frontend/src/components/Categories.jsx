import React from 'react';
import { categories } from '../data/categories';

function Categories() {
  return (
    <section className="popular-categories">
      <h2>Популярные категории</h2>
      <div className="category-grid">
        {categories.map(cat => (
          <a key={cat.id} href={`/catalog?category=${cat.id}`} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Categories;