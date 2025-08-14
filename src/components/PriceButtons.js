import React from 'react';

const PriceButtons = ({ priceType, onChange }) => {
  return (
    <div className="price-buttons">
      <button
        className={`price-btn ${priceType === 'standard' ? 'active' : ''}`}
        onClick={() => onChange('standard')}
        data-price="standard"
      >
        Preço Padrão
      </button>
      <button
        className={`price-btn ${priceType === 'partnership' ? 'active' : ''}`}
        onClick={() => onChange('partnership')}
        data-price="partnership"
      >
        Preço Parceria
      </button>
    </div>
  );
};

export default PriceButtons;
