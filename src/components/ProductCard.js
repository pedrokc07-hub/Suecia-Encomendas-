import React, { useState } from 'react';

const ProductCard = ({ product, quantity, updateQuantity, priceType }) => {
  const [imgError, setImgError] = useState(false);

  const handleQuantityChange = (e) => {
    // Envia o valor bruto; a normalização ('' -> 0) fica no componente pai
    updateQuantity(product.id, e.target.value);
  };

  const showImage = product.useImage && !imgError;
  const unitPrice = priceType === 'partnership' && product.pricePartner ? product.pricePartner : product.price;

  return (
    <div className="product-card" data-name={product.name} data-price={unitPrice} data-category={product.category}>
      <div className="product-image">
        {showImage ? (
          <div className="image-container">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image-file"
              onError={() => setImgError(true)}
            />
          </div>
        ) : (
          <div className="image-placeholder">{product.image && !product.useImage ? product.image : '🔫'}</div>
        )}
      </div>
      <h3>{product.name}</h3>
      <p className="price">R$ {unitPrice.toLocaleString('pt-BR')}</p>
      <div className="quantity-input">
        <label htmlFor={`qty-${product.id}`}>Quantidade:</label>
        <input
          type="number"
          id={`qty-${product.id}`}
          min="0"
          value={quantity === 0 ? '' : quantity}
          onChange={handleQuantityChange}
          placeholder="0"
        />
      </div>
    </div>
  );
};

export default ProductCard;
