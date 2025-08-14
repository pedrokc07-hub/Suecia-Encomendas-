import React from 'react';

const CheckoutButton = ({ total, onCheckout }) => {
  return (
    <div className="checkout-section">
      <button id="finalizar-compra" className="checkout-btn" onClick={onCheckout}>
        Finalizar Compra - Total: R$ {total.toLocaleString('pt-BR')}
      </button>
    </div>
  );
};

export default CheckoutButton;
