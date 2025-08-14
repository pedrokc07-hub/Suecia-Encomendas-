import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import siteIcon from './imgs/icon_site-removebg-preview.png';

// Define o favicon dinamicamente a partir de um asset em src/
(function setFavicon(href) {
  try {
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'icon');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);
  } catch (_) {
    // ignora falhas silenciosamente
  }
})(siteIcon);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
