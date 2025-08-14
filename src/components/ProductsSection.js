import React from 'react';
import ProductCard from './ProductCard';

const ProductsSection = ({ title, products, cart, updateQuantity, priceType }) => {
  return (
    <div className="products-section">
      <h2>{title}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            quantity={cart[product.id] || 0}
            updateQuantity={updateQuantity}
            priceType={priceType}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSection;
