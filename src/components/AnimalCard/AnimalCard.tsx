import React from 'react';
import { AnimalCardProps } from '../types/types';

import './AnimalCard.css';

const AnimalCard: React.FC<AnimalCardProps> = ({
  img,
  name,
  feature,
  removeAnimal,
  feedAnimal,
}) => {
  return (
    <div className="animal-card-container">
      <div className="animal-card-container__info">
        <img src={img} alt={name}></img>
        <div className="animal-card-container__title">
          <span>{name}</span>
          <span>
            {feature.name}:{feature.count}
          </span>
        </div>
      </div>
      <div className="animal-card-container__buttons">
        <button onClick={feedAnimal}>Feed</button>
        <button onClick={removeAnimal}>Free</button>
      </div>
    </div>
  );
};

export default AnimalCard;
