import React from 'react'
import './index.scss'

const ResumoDoacoes = () => {
  return (
    <div id='bg-resumo-doacoes'>
        <div id='content-resumo-doacoes'>
            <div>
                <h1>Doações</h1>
                <div>
                    <p>Todos os anos, o grupo Vigilhão Despertai se dedica a levar o amor de Cristo às crianças de Taquaralto através da arrecadação e distribuição de brinquedos. Esse gesto já é uma tradição em nossa comunidade e reflete o cuidado e a compaixão de Deus por cada um de Seus filhos. Sabemos que, para as crianças, receber um presente no Natal é mais do que alegria – é um sinal de que há amor e esperança em meio às dificuldades. Para nós, é uma bênção compartilhar o verdadeiro espírito de Natal e fortalecer os laços de fé e comunhão entre todos. Louvamos a Deus por esse momento de união e entrega!</p>
                </div>
            </div>
            <div className="video-wrapper">
              <iframe 
                src="https://www.youtube.com/embed/xpTNs8z8rvw?si=lpNVVbUI50yXqDUV"
                title="Video do Vigilhão"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
        </div>
    </div>
  )
}

export default ResumoDoacoes