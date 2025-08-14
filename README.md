# E-commerce de Armas

Um site de e-commerce simples e moderno desenvolvido em React.js, com tema escuro e futurista.

## 🚀 Funcionalidades

- **Dados do Comprador**: Formulário para inserir nome, RG, telefone e Discord
- **Calculadora**: Calcula o valor total e permite aplicar desconto por porcentagem
- **Seleção de Preço**: Botões para escolher entre Preço Padrão e Preço Parceria
- **Catálogo de Produtos**: 
  - **Armas**: AK-47, POW, UZI, Five-Seven
  - **Munições**: 7.62, .380
- **Carrinho de Compras**: Input para quantidade de cada produto
- **Finalização**: Botão para finalizar compra com valor total calculado

## 🛠️ Tecnologias Utilizadas

- React.js 18.2.0
- CSS3 com efeitos modernos
- JavaScript ES6+
- Design responsivo

## 📦 Instalação

1. **Clone o repositório** (se aplicável) ou navegue até a pasta do projeto

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Abra o navegador** e acesse `http://localhost:3000`

## 🎨 Características do Design

- **Tema Escuro**: Interface com fundo preto e acentos laranja
- **Efeitos Visuais**: Sombras, gradientes e transparências
- **Tipografia**: Fonte monospace para aspecto futurista
- **Responsivo**: Adaptável a diferentes tamanhos de tela
- **Animações**: Transições suaves e efeitos hover

## 💡 Como Usar

1. **Preencha os dados** na seção "Dados do Comprador"
2. **Selecione produtos** e defina as quantidades desejadas
3. **Use a calculadora** para aplicar descontos (opcional)
4. **Escolha o tipo de preço** (Padrão ou Parceria)
5. **Clique em "Finalizar Compra"** para concluir a transação

## 🔧 Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Cria a versão de produção
- `npm test`: Executa os testes
- `npm run eject`: Ejeta as configurações (não recomendado)

## 📱 Responsividade

O site é totalmente responsivo e funciona bem em:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎯 Estrutura do Projeto

```
src/
├── components/
│   ├── BuyerData.js          # Dados do comprador
│   ├── Calculator.js          # Calculadora de valores
│   ├── PriceButtons.js        # Botões de tipo de preço
│   ├── ProductsSection.js     # Seções de produtos
│   ├── ProductCard.js         # Card individual de produto
│   └── CheckoutButton.js      # Botão de finalizar compra
├── App.js                     # Componente principal
├── App.css                    # Estilos principais
├── index.js                   # Ponto de entrada
└── index.css                  # Estilos globais
```

## 🌟 Recursos Especiais

- **Cálculo Automático**: Total atualiza automaticamente conforme as quantidades
- **Validação**: Verifica dados obrigatórios antes da finalização
- **Formatação**: Valores formatados em Real brasileiro
- **Estado Persistente**: Mantém dados durante a sessão

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

---

Desenvolvido com ❤️ usando React.js
