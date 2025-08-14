import React from 'react';
import flag from '../imgs/teste_bandeira-removebg-preview.png';

const Header = () => {
  return (
    <header className="site-header">
      <div className="header-inner">
        <img src={flag} alt="Bandeira da Suécia" className="header-flag" />
        <h1 className="header-title">Suécia encomendas</h1>
        <img src={flag} alt="Bandeira da Suécia" className="header-flag" />
      </div>
    </header>
  );
};

export default Header;
