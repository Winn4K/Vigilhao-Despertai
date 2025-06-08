import React, { useState, useEffect } from 'react';
import './index.scss';

const Cronometro = () => {
  const [tempoRestante, setTempoRestante] = useState({
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const destino = new Date("2025-07-07T22:00:00");

    const atualizarTempo = () => {
      const agora = new Date();
      let diferenca = destino - agora;

      if (diferenca <= 0) {
        setTempoRestante({
          meses: 0,
          dias: 0,
          horas: 0,
          minutos: 0,
          segundos: 0,
        });
        clearInterval(intervalo);
        return;
      }

      const segundos = Math.floor((diferenca / 1000) % 60);
      const minutos = Math.floor((diferenca / 1000 / 60) % 60);
      const horas = Math.floor((diferenca / 1000 / 60 / 60) % 24);
      const diasTotal = Math.floor(diferenca / (1000 * 60 * 60 * 24));

      const meses = Math.floor(diasTotal / 30);
      const dias = diasTotal % 30;

      setTempoRestante({ meses, dias, horas, minutos, segundos });
    };

    const intervalo = setInterval(atualizarTempo, 1000);
    atualizarTempo();

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div id="cronometro" className={isScrolled ? "scrolled" : ""}>
      <span>FALTAM {tempoRestante.meses} MESES, {tempoRestante.dias} DIAS, {tempoRestante.horas} HORAS, {tempoRestante.minutos} MIN E {tempoRestante.segundos} SEGUNDOS PARA O VIGILHÃO DESPERTAI 2025</span>
    </div>
  );
};

export default Cronometro;
