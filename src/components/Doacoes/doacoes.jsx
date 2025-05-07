import React from 'react'
import { Link } from "react-router-dom";
import './index.scss'

const Doacoes = () => {
  return (
    <div id='bg-doacoes'>
        <div id='content-doacoes'>
            <img src="/assets/svg/doacoes/img1.svg" alt="" />
            <div>
                <h1>Doações ♡</h1>
                <div>
                    <p>Doar é um ato de gratidão a Deus, uma forma de compartilhar o que Ele nos deu com aqueles que mais precisam.</p>
                    <p>Cada doação espalha amor, renova esperanças e fortalece nossa fé em comunidade.</p>
                    <p>Juntos, somos as mãos de Deus para abençoar vidas!</p>
                </div>
                <button><Link to="/doe-aqui">Doe aqui</Link></button>
            </div>
        </div>
    </div>
  )
}

export default Doacoes