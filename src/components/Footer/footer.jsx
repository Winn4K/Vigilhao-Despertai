import React from 'react'
import './index.scss'

const Footer = () => {
  return (
    <div id='bg-footer'>
        <div id='title-footer'>
            <h1>Vigilhão Despertai</h1>
        </div>
        <div id='content-footer'>
            <div className='content-grid-footer'>
                <h2>Endereço</h2>
                <p>Avenida P01, S/N - Taquaralto,</p>
                <p>Palmas - TO, 77270-000</p>
            </div>
            <div className='content-grid-footer'>
                <h2>Contato</h2>
                <p>(63) 9 9999-9999</p>
                <p>(63) 3222-2222</p>
            </div>
        </div>
        <div id='copyright-footer'>
            <p>© 2024 - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer