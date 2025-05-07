// Catalog.jsx
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { useFilteredProducts } from '../hooks/useFilteredProducts';
import { getAllCategories, getAllBrands } from '../utils/productUtils';

function Catalog() {
  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 100000,
    searchTerm: '',
    brands: [],
    discountOnly: false
  });

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  // Загрузка всех возможных категорий и брендов
  const [availableCategories, setAvailableCategories] = useState([]);
  const [availableBrands, setAvailableBrands] = useState([]);

  useEffect(() => {
    setAvailableCategories(getAllCategories());
    setAvailableBrands(getAllBrands());
  }, []);

  const filteredProducts = useFilteredProducts(filters);

  // Пагинация
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const goToPreviousPage = () => setCurrentPage(prev => prev - 1);
  const goToNextPage = () => setCurrentPage(prev => prev + 1);

  // Обработчики событий
  const handleCategoryChange = (e) => {
    const categoryId = e.target.value;
    const isChecked = e.target.checked;

    setFilters((prev) => {
      const updatedCategories = isChecked
        ? [...prev.categories, categoryId]
        : prev.categories.filter(id => id !== categoryId);

      return { ...prev, categories: updatedCategories };
    });
    setCurrentPage(1);
  };

  const handleBrandChange = (e) => {
    const brand = e.target.value;
    const isChecked = e.target.checked;

    setFilters((prev) => {
      const updatedBrands = isChecked
        ? [...prev.brands, brand]
        : prev.brands.filter(b => b !== brand);

      return { ...prev, brands: updatedBrands };
    });
    setCurrentPage(1);
  };

  const handleMaxPriceChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: parseInt(e.target.value)
    }));
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: e.target.value.toLowerCase()
    }));
    setCurrentPage(1);
  };

  const handleDiscountChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      discountOnly: e.target.checked
    }));
    setCurrentPage(1);
  };

  return (
    <div className="catalog-page">
      <aside className="filters">
        {/* Поиск */}
        <div className="filter-group">
          <input
            type="text"
            placeholder="Поиск товаров..."
            value={filters.searchTerm}
            onChange={handleSearchChange}
          />
        </div>

        {/* Категории */}
        <div className="filter-group">
          <h3>Категории</h3>
          {availableCategories.map(cat => (
            <label key={cat.id}>
              <input
                type="checkbox"
                value={cat.id}
                checked={filters.categories.includes(cat.id)}
                onChange={handleCategoryChange}
              />
              {cat.name}
            </label>
          ))}
        </div>

        {/* Бренды */}
        <div className="filter-group">
          <h3>Бренды</h3>
          {availableBrands.map(brand => (
            <label key={brand.id}>
              <input
                type="checkbox"
                value={brand.id}
                checked={filters.brands.includes(brand.id)}
                onChange={handleBrandChange}
              />
              {brand.name}
            </label>
          ))}
        </div>

        {/* Цена */}
        <div className="filter-group">
          <h3>Максимальная цена: {filters.maxPrice.toLocaleString()} ₽</h3>
          <input
            type="range"
            min="0"
            max="100000"
            value={filters.maxPrice}
            onChange={handleMaxPriceChange}
          />
        </div>

        {/* Только со скидкой */}
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={filters.discountOnly}
              onChange={handleDiscountChange}
            />
            Только со скидкой
          </label>
        </div>
      </aside>

      {/* Товары */}
      <section className="products">
        {currentProducts.length > 0 ? (
          currentProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Товаров не найдено</p>
        )}
      </section>

      {/* Пагинация */}
      <div className="pagination">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          ← Назад
        </button>
        <span>Страница {currentPage} из {totalPages}</span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Вперед →
        </button>
      </div>
    </div>
  );
}

export default Catalog;