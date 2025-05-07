import React from 'react'
import './index.scss'

const CaixaDeOracoes = () => {
  return (
    <div id='bg-caixinha-de-oracoes'>
        <div id='content-caixinha-de-oracoes'>
            <div>
                <img src="/assets/svg/caixinhaOracoes/titulo.svg" id='titulo' alt="" />
                <div id='input-box'>
                    <div>
                      <label htmlFor="nome">Nome</label>
                      <input className='input' name='nome' type="text" placeholder='Digite seu nome...' />
                    </div>
                    <div>
                      <label htmlFor="descricao">Pedido de oração</label>
                      <textarea className='input' id="input-descricao" name="descricao" rows="4" cols="50" wrap="soft" placeholder='Descreva seu pedido de oração...'></textarea>
                    </div>
                    <button id='enviar'>Enviar</button>            
                </div>
            </div>
            <img src="/assets/svg/caixinhaOracoes/img2.svg" id='img-banner' alt="" />
        </div>
    </div>
  )
}

export default CaixaDeOracoes