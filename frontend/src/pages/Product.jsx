
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Product() {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Эмуляция получения товара по ID из URL
    const productId = new URLSearchParams(window.location.search).get('id');
    const foundProduct = products.find(p => p.id === parseInt(productId));

    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, []);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} добавлен в корзину`);
  };

  const adjustQuantity = (delta) => {
    setQuantity(prev => Math.max(1, prev + delta));
  };

  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <>
      <main className="product-page">
        <div className="product-details">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h1>{product.name}</h1>
            <p id="product-price">Цена: {product.price.toLocaleString()} ₽</p>
            <p id="product-description">{product.description}</p>
            <div className="quantity-selector">
              <button className="qty-btn" onClick={() => adjustQuantity(-1)}>-</button>
              <input type="number" id="quantity" value={quantity} readOnly />
              <button className="qty-btn" onClick={() => adjustQuantity(1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart}>Добавить в корзину</button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Product;