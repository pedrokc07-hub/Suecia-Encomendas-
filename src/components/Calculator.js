import React from 'react';

const Calculator = ({ cart, weapons, ammo }) => {
  // Calcular materiais necessários baseado no carrinho
  const calculateMaterials = () => {
    const materials = {
      ferro: 0,
      ferrolho: 0,
      cano: 0,
      mola: 0,
      gatilho: 0,
      cobre: 0,
      prata: 0,
      polvora: 0
    };

    // Calcular materiais para armas
    weapons.forEach(weapon => {
      const quantity = cart[weapon.id] || 0;
      if (quantity > 0) {
        switch (weapon.name) {
          case 'AK-47':
            materials.ferro += quantity * 5;
            materials.ferrolho += quantity * 1;
            materials.cano += quantity * 1;
            materials.mola += quantity * 1;
            materials.gatilho += quantity * 1;
            break;
          case 'PDW':
            materials.ferro += quantity * 3;
            materials.ferrolho += quantity * 1;
            materials.cano += quantity * 1;
            materials.mola += quantity * 1;
            materials.gatilho += quantity * 1;
            break;
          case 'UZI':
            materials.ferro += quantity * 2;
            materials.ferrolho += quantity * 1;
            materials.cano += quantity * 1;
            materials.mola += quantity * 1;
            materials.gatilho += quantity * 1;
            break;
          case 'Five-Seven':
            materials.ferro += quantity * 1;
            materials.ferrolho += quantity * 1;
            materials.cano += quantity * 1;
            materials.mola += quantity * 1;
            materials.gatilho += quantity * 1;
            break;
          default:
            break;
        }
      }
    });

    // Calcular materiais para munições
    ammo.forEach(ammoItem => {
      const quantity = cart[ammoItem.id] || 0;
      if (quantity > 0) {
        switch (ammoItem.name) {
          case '7.62':
            materials.cobre += quantity * 3;
            materials.prata += quantity * 3;
            materials.polvora += quantity * 3;
            break;
          case '.380':
            materials.cobre += quantity * 2;
            materials.prata += quantity * 2;
            materials.polvora += quantity * 2;
            break;
          default:
            break;
        }
      }
    });

    return materials;
  };

  const materials = calculateMaterials();

  return (
    <div className="calculator">
      <h2>Calculadora</h2>
      
      {/* Seção de Materiais Necessários */}
      <div className="materials-section">
        <h3>🔧 Materiais Necessários</h3>
        <div className="materials-list">
          {materials.ferro > 0 && <div className="material-item">• {materials.ferro}× ferro</div>}
          {materials.ferrolho > 0 && <div className="material-item">• {materials.ferrolho}× ferrolho</div>}
          {materials.cano > 0 && <div className="material-item">• {materials.cano}× cano</div>}
          {materials.mola > 0 && <div className="material-item">• {materials.mola}× mola</div>}
          {materials.gatilho > 0 && <div className="material-item">• {materials.gatilho}× gatilho</div>}
          {materials.cobre > 0 && <div className="material-item">• {materials.cobre}× cobre</div>}
          {materials.prata > 0 && <div className="material-item">• {materials.prata}× prata</div>}
          {materials.polvora > 0 && <div className="material-item">• {materials.polvora}× polvora</div>}
        </div>
      </div>
    </div>
  );
};

export default Calculator;
