import React, { useState, useEffect } from 'react';
import './index.scss'

const Cronometro = () => {
  const [tempoRestante, setTempoRestante] = useState({
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  useEffect(() => {
    const destino = new Date("2025-07-07T22:00:00"); // Altere para a data exata do Vigilhão

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

      // Estimativa simples: 1 mês = 30 dias
      const meses = Math.floor(diasTotal / 30);
      const dias = diasTotal % 30;

      setTempoRestante({ meses, dias, horas, minutos, segundos });
    };

    const intervalo = setInterval(atualizarTempo, 1000);
    atualizarTempo(); // Primeira execução imediata

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div id="cronometro">
      FALTAM {tempoRestante.meses} MESES, {tempoRestante.dias} DIAS, {tempoRestante.horas} HORAS, {tempoRestante.minutos} MIN E {tempoRestante.segundos} SEGUNDOS PARA O VIGILHÃO DESPERTAI 2025
    </div>
  );
};

export default Cronometro;
