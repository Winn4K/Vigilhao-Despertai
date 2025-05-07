import React from 'react'
import { Link } from "react-router-dom";
import './index.scss'

const Oracoes = () => {
  return (
    <div id='bg-oracoes'>
        <div id='content-oracoes'>
            <div>
                <h1>Caixinha de Orações</h1>
                <div>
                    <p>Orar é um ato de fé e comunhão com Deus. Através da oração, entregamos nossos anseios, agradecimentos e lutas nas mãos d'Aquele que pode todas as coisas.</p>
                    <p>Aqui, você não está sozinho! Envie seu pedido de oração e permita que intercedamos por você.</p>
                    <p>Cada oração é uma ponte entre o céu e a terra, um elo de amor e esperança.</p>
                    <p>Juntos, somos uma família que ora, crê e espera no Senhor!</p>
                </div>
                <button><Link to="/caixinha-de-oracoes">Deposite seu pedido de oração</Link></button>
            </div>
            <img src="/assets/svg/caixinhaOracoes/img1.svg" alt="" />
        </div>
    </div>
  )
}

export default Oracoes