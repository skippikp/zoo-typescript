import React, { useState } from 'react';
import AnimalCard from '../AnimalCard/AnimalCard';
import { AnimalCardProps } from '../types/types';

import giraffeImg from '../../img/giraffe.png';
import wolfImg from '../../img/wolf.png';
import hippoImg from '../../img/hippo.png';

import './App.css';

const App = () => {
  const [zoo, setZoo] = useState<AnimalCardProps[]>([]);

  const randomInt = (min: number, max: number) => {
    return Math.floor(min + Math.random() * max);
  };

  const addAnimal = (): void => {
    const animals = ['Wolf', 'Hippo', 'Giraffe'];
    const randomAnimal = randomInt(0, 3);
    const randomFeatureCount = randomInt(1, 5);

    switch (animals[randomAnimal]) {
      case 'Wolf':
        setZoo((prev: Array<AnimalCardProps>) => [
          ...prev,
          {
            img: wolfImg,
            name: 'Wolf',
            feature: { name: 'speed', count: randomFeatureCount },
          },
        ]);
        break;
      case 'Hippo':
        setZoo((prev: Array<AnimalCardProps>) => [
          ...prev,
          {
            img: hippoImg,
            name: 'Hippo',
            feature: { name: 'weight', count: randomFeatureCount },
          },
        ]);
        break;

      case 'Giraffe':
        setZoo((prev: Array<AnimalCardProps>) => [
          ...prev,
          {
            img: giraffeImg,
            name: 'Giraffe',
            feature: { name: 'height', count: randomFeatureCount },
          },
        ]);
        break;
      default:
        return;
    }
  };

  const removeAnimal = (animal: AnimalCardProps): void => {
    const index = zoo.findIndex((item) => item === animal);
    setZoo((prev) => [...prev.slice(0, index), ...prev.slice(index + 1)]);
  };

  const feedAnimal = (animal: AnimalCardProps): void => {
    const index = zoo.findIndex((item) => item === animal);
    const updatedAnimal = { ...zoo[index] };
    updatedAnimal.feature.count += 1;
    setZoo((prev) => [
      ...prev.slice(0, index),
      updatedAnimal,
      ...prev.slice(index + 1),
    ]);
  };

  return (
    <div className="app">
      <button className="app__add-button" onClick={addAnimal}>
        Catch
      </button>
      <div className="app-container">
        <div className="app-container__cards">
          {zoo.map((animal: AnimalCardProps, id: number) => {
            return (
              <AnimalCard
                key={id}
                img={animal.img}
                name={animal.name}
                feature={animal.feature}
                removeAnimal={() => removeAnimal(animal)}
                feedAnimal={() => feedAnimal(animal)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
