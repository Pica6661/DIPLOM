import React from 'react';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      {product.discount && <div className="discount-badge">-{product.discount}%</div>}
      <h3>{product.name}</h3>
      <div className="price">
        {product.discount ? (
          <>
            <span className="original-price">{product.price.toLocaleString()} ₽</span>
            <span className="discount-price">
              {(product.price * (1 - product.discount / 100)).toLocaleString()} ₽
            </span>
          </>
        ) : (
          `${product.price.toLocaleString()} ₽`
        )}
      </div>
      <button className="add-to-cart-btn" onClick={() => addToCart(product)}>В корзину</button>
    </div>
  );
}

export default ProductCard;