import React, { useState, useEffect, useRef } from 'react';
import './index.scss';

const imagens = [
  '../../assets/jpg/carrosel/img1.jpg',
  '../../assets/jpg/carrosel/img2.jpg',
  '../../assets/jpg/carrosel/img3.jpg',
  '../../assets/jpg/carrosel/img4.jpg',
  '../../assets/jpg/carrosel/img5.jpg',
  '../../assets/jpg/carrosel/img6.jpg',
  '../../assets/jpg/carrosel/img7.jpg',
  '../../assets/jpg/carrosel/img8.jpg'
];

const Carrossel = () => {
  const [indexAtual, setIndexAtual] = useState(0);
  const intervaloRef = useRef(null); // Armazena o timer

  const iniciarTimer = () => {
    limparTimer();
    intervaloRef.current = setInterval(() => {
      setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    }, 10000); // 10 segundos
  };

  const limparTimer = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
    }
  };

  const proximaImagem = () => {
    setIndexAtual((prevIndex) => (prevIndex + 1) % imagens.length);
    iniciarTimer(); // Reinicia o timer após clique
  };

  const imagemAnterior = () => {
    setIndexAtual((prevIndex) => (prevIndex - 1 + imagens.length) % imagens.length);
    iniciarTimer(); // Reinicia o timer após clique
  };

  useEffect(() => {
    iniciarTimer();
    return () => limparTimer();
  }, []);

  return (
    <div className="carrossel">
      <img src={imagens[indexAtual]} alt={`slide-${indexAtual}`} className="imagem" />

      <button className="seta esquerda" onClick={imagemAnterior}>❮</button>
      <button className="seta direita" onClick={proximaImagem}>❯</button>
    </div>
  );
};

export default Carrossel;
