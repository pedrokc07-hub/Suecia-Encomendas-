import React from 'react';

const BuyerData = ({ buyerData, setBuyerData }) => {
  const handleInputChange = (field, value) => {
    setBuyerData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="buyer-data">
      <h2>Dados do Comprador</h2>
      <div className="input-group">
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          value={buyerData.nome}
          onChange={(e) => handleInputChange('nome', e.target.value)}
          placeholder="Digite seu nome"
        />
      </div>
      <div className="input-group">
        <label htmlFor="rg">RG:</label>
        <input
          type="text"
          id="rg"
          value={buyerData.rg}
          onChange={(e) => handleInputChange('rg', e.target.value)}
          placeholder="Digite seu RG"
        />
      </div>
      <div className="input-group">
        <label htmlFor="telefone">Telefone:</label>
        <input
          type="text"
          id="telefone"
          value={buyerData.telefone}
          onChange={(e) => handleInputChange('telefone', e.target.value)}
          placeholder="Digite seu telefone"
        />
      </div>
      <div className="input-group">
        <label htmlFor="discord">Discord:</label>
        <input
          type="text"
          id="discord"
          value={buyerData.discord}
          onChange={(e) => handleInputChange('discord', e.target.value)}
          placeholder="Ex.: usuario#0000"
        />
      </div>
    </div>
  );
};

export default BuyerData;
