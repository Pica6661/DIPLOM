import { products } from '../data/products';

export const getAllCategories = () => {
  const categoriesSet = new Set(products.map(p => p.category));
  return Array.from(categoriesSet).map(cat => {
    // Здесь можно добавить отображение ID на имя, если нужно
    const categoryNames = {
      faucets: 'Смесители',
      showers: 'Душевые системы',
      sinks: 'Раковины',
      bathtubs: 'Ванны',
      ceramics: 'Санфаянс',
      accessories: 'Аксессуары'
    };
    return {
      id: cat,
      name: categoryNames[cat] || cat
    };
  });
};

export const getAllBrands = () => {
  const brandsSet = new Set(products.map(p => p.brand));
  return Array.from(brandsSet).map(brand => ({
    id: brand,
    name: brand.charAt(0).toUpperCase() + brand.slice(1)
  }));
};