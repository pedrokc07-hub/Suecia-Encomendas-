import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import BuyerData from './components/BuyerData';
import Calculator from './components/Calculator';
import PriceButtons from './components/PriceButtons';
import ProductsSection from './components/ProductsSection';
import CheckoutButton from './components/CheckoutButton';

// Imagens locais
import ak47Img from './imgs/ak-22.png';
import pdwImg from './imgs/pdw (1).png';
import fiveSevenImg from './imgs/five-seven.png';
import uziImg from './imgs/uzi.png';
import balaAkImg from './imgs/bala ak.png';
import balaFiveImg from './imgs/bala five.png';

function App() {
  const [buyerData, setBuyerData] = useState({
    nome: '',
    rg: '',
    telefone: '',
    discord: ''
  });

  const [priceType, setPriceType] = useState('standard');
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  // Dados dos produtos
  const weapons = [
    { id: 'ak47', name: 'AK-47', price: 150000, pricePartner: 120000, category: 'weapon', image: ak47Img, useImage: true },
    { id: 'pow', name: 'PDW', price: 110000, pricePartner: 90000, category: 'weapon', image: pdwImg, useImage: true },
    { id: 'uzi', name: 'UZI', price: 85000, pricePartner: 70000, category: 'weapon', image: uziImg, useImage: true },
    { id: 'fiveseven', name: 'Five-Seven', price: 85000, pricePartner: 70000, category: 'weapon', image: fiveSevenImg, useImage: true }
  ];

  const ammo = [
    { id: '762', name: '7.62', price: 500, pricePartner: 350, category: 'ammo', image: balaAkImg, useImage: true },
    { id: '380', name: '.380', price: 450, pricePartner: 300, category: 'ammo', image: balaFiveImg, useImage: true }
  ];

  const allProducts = [...weapons, ...ammo];

  // Atualizar total quando o carrinho mudar
  useEffect(() => {
    let newTotal = 0;
    Object.keys(cart).forEach(productId => {
      const product = allProducts.find(p => p.id === productId);
      if (product && cart[productId] > 0) {
        const unit = priceType === 'partnership' && product.pricePartner ? product.pricePartner : product.price;
        newTotal += unit * cart[productId];
      }
    });
    setTotal(newTotal);
  }, [cart, priceType, allProducts]);

  // Atualizar quantidade no carrinho
  const updateQuantity = (productId, quantity) => {
    setCart(prev => ({
      ...prev,
      [productId]: parseInt(quantity) || 0
    }));
  };

  // Alternar tipo de preço (reseta carrinho e total)
  const handlePriceTypeChange = (type) => {
    if (type !== priceType) {
      setPriceType(type);
      setCart({}); // resetar carrinho
      setTotal(0); // resetar total
    }
  };

  // Finalizar compra
  const handleCheckout = async () => {
    if (total === 0) {
      alert('Adicione produtos ao carrinho antes de finalizar a compra!');
      return;
    }
    
    if (!buyerData.nome || !buyerData.rg || !buyerData.telefone) {
      alert('Preencha todos os dados obrigatórios! (Nome, RG, Telefone)');
      return;
    }

    const finalTotal = total;

    // Resumo dos itens do pedido com quantidades
    const itemsSummary = Object.keys(cart)
      .map(productId => {
        const product = allProducts.find(p => p.id === productId);
        const quantity = cart[productId] || 0;
        if (!product || quantity <= 0) return null;
        const unitPrice = priceType === 'partnership' && product.pricePartner ? product.pricePartner : product.price;
        return `- ${product.name}: ${quantity}x (R$ ${(unitPrice * quantity).toLocaleString('pt-BR')})`;
      })
      .filter(Boolean)
      .join('\n');

    const webhookUrl = "https://discord.com/api/webhooks/1405666314697179236/qDhffl67ETyQFcbu15pHYy14NPKelX-LD1SmIXREHjy98tXnLXuJrTLyJuitA--g4yCh";

    const discordMessage = {
      embeds: [
        {
          title: "Nova Encomenda - Suécia Encomendas",
          description: `Um novo pedido foi realizado!`, 
          color: 3447003, // Cor azul para o embed
          fields: [
            {
              name: "Valor Total",
              value: `R$ ${finalTotal.toLocaleString('pt-BR')}`, 
              inline: true
            },
            {
              name: "Tipo de Preço",
              value: priceType === 'standard' ? 'Padrão' : 'Parceria', 
              inline: true
            },
            {
              name: "Itens do Pedido",
              value: itemsSummary || 'Nenhum item selecionado.'
            },
            {
              name: "Dados do Comprador",
              value: `Nome: ${buyerData.nome}\nRG: ${buyerData.rg}\nTelefone: ${buyerData.telefone}\nDiscord: ${buyerData.discord || 'Não informado'}`
            }
          ],
          footer: {
            text: "E-commerce de Armas"
          },
          timestamp: new Date().toISOString()
        }
      ]
    };

    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(discordMessage),
      });

      if (response.ok) {
        alert('Pedido enviado para o Discord com sucesso!');
        setCart({}); // Limpar carrinho após o envio
        setTotal(0);
        setBuyerData({ nome: '', rg: '', telefone: '', discord: '' }); // Limpar dados do comprador
      } else {
        const errorText = await response.text();
        alert(`Erro ao enviar pedido para o Discord: ${response.status} - ${errorText}`);
      }
    } catch (error) {
      alert(`Erro na conexão com o Discord: ${error.message}`);
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* Seção Superior */}
        <div className="top-section">
          <BuyerData 
            buyerData={buyerData} 
            setBuyerData={setBuyerData} 
          />
          <Calculator 
            cart={cart}
            weapons={weapons}
            ammo={ammo}
          />
        </div>

        {/* Botões de Preço */}
        <PriceButtons 
          priceType={priceType}
          onChange={handlePriceTypeChange}
        />

        {/* Seção de Armas */}
        <ProductsSection 
          title="Armas"
          products={weapons}
          cart={cart}
          updateQuantity={updateQuantity}
          priceType={priceType}
        />

        {/* Seção de Munições */}
        <ProductsSection 
          title="Munições"
          products={ammo}
          cart={cart}
          updateQuantity={updateQuantity}
          priceType={priceType}
        />

        {/* Botão Finalizar Compra */}
        <CheckoutButton 
          total={total}
          onCheckout={handleCheckout}
        />
      </div>
    </div>
  );
}

export default App;
