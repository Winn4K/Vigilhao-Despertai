import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import './index.scss';

import card1 from '../../assets/svg/NatalSolidario/card1.svg';
import card2 from '../../assets/svg/NatalSolidario/card2.svg';
import card3 from '../../assets/svg/NatalSolidario/card3.svg';
import card4 from '../../assets/svg/NatalSolidario/card4.svg';
import card5 from '../../assets/svg/NatalSolidario/card5.svg';

const initialCards = [card1, card2, card3, card4, card5];

export default function NatalCards() {
  const [cards, setCards] = useState(initialCards);
  const [hover, setHover] = useState(null);
  const hoverTimeout = useRef(null);

  const handleMouseEnter = (index) => {
    hoverTimeout.current = setTimeout(() => {
      setHover(index);
    }, 300);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    setHover(null);
  };

  const handleClick = (index) => {
    if (index === 2) return;
    const newCards = [...cards];
    [newCards[2], newCards[index]] = [newCards[index], newCards[2]];
    setCards(newCards);
  };

  return (
    <div className="natal-cards-container">
      {cards.map((src, index) => {
        const isHovered = hover === index;

        const offsetBase = 90;
        let offset = (index - 2) * offsetBase;

        // Destaque para os cards laterais (index 1 e 3)
        if (index === 1 || index === 3) {
          offset *= 1.5; // puxar mais para os lados
        }

        const rotateBase = (index - 2) * 18;
        const rotate = (index === 1 || index === 3)
          ? isHovered
            ? (index - 2) * 28
            : (index - 2) * 25 // gira mais
          : isHovered
            ? (index - 2) * 24
            : rotateBase;

        const translateX = isHovered ? offset * 1.2 : offset;
        const translateY = index === 1 || index === 3 ? -30 : 0;
        const scale = index === 2 ? 1.2 : isHovered ? 1.1 : 1;
        const z =
          isHovered
            ? 1001 // hover sempre acima
            : index === 2
              ? hover !== null ? 998 : 1000 // recua se outra carta está em foco
              : 100 - Math.abs(index - 2); // normal para demais


        return (
          <motion.img
            key={`${src}-${index}`}
            layout
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            src={src}
            alt={`Card ${index}`}
            className="card"
            style={{
              transform: `translateX(${translateX / 16}em) translateY(${translateY / 16}em) rotate(${rotate}deg) scale(${scale})`,
              zIndex: z,
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </div>
  );
}
