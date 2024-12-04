import React, { useState } from 'react';
import Navbar from './navbar';
import './AddProduct.css'; // Importe o CSS para o componente

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productImage, setProductImage] = useState('');
  const [message, setMessage] = useState(''); // Estado para a mensagem

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend (se necessário)
    console.log('Produto Adicionado:', {
      productName,
      productDescription,
      productPrice,
      productImage,
    });

    // Exibir a mensagem de sucesso
    setMessage('Produto anunciado com sucesso!');

    // Resetar o formulário após o envio
    setProductName('');
    setProductDescription('');
    setProductPrice('');
    setProductImage('');

    // Esconder a mensagem após 3 segundos
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Adicionar Produto</h2>

        {/* Exibe a mensagem de sucesso, se existir */}
        {message && <div className="success-message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="productName">Nome do Produto</label>
            <input
              type="text"
              id="productName"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Digite o nome do produto"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productDescription">Descrição do Produto</label>
            <textarea
              id="productDescription"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              placeholder="Descreva o produto"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productPrice">Valor de Mercado</label>
            <input
              type="number"
              id="productPrice"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              placeholder="Digite o valor"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="productImage">Imagem do Produto (URL)</label>
            <input
              type="text"
              id="productImage"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
              placeholder="Cole a URL da imagem"
            />
          </div>
          <button type="submit">Adicionar Produto</button>
        </form>

        {productImage && (
          <div className="product-image-preview">
            <img src={productImage} alt="Preview do Produto" />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddProduct;
