// src/hooks/useFilteredProducts.js
import { useEffect, useState } from 'react';
import { products } from '../data/products';

export function useFilteredProducts(filters) {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    let result = [...products];

    // Фильтр по категории
    if (filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }
    // Если категории не выбраны → показываем все товары

    // Фильтр по цене
    result = result.filter(p => p.price <= filters.maxPrice);

    // Поиск по названию или описанию
    if (filters.searchTerm) {
      const term = filters.searchTerm.toLowerCase();
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    // Фильтр по брендам
    if (filters.brands.length > 0) {
      result = result.filter(p => filters.brands.includes(p.brand));
    }

    // Только со скидкой
    if (filters.discountOnly) {
      result = result.filter(p => p.discount && p.discount > 0);
    }

    setFilteredProducts(result);
  }, [filters]);

  return filteredProducts;
}