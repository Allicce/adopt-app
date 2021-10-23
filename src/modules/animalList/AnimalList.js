import React from "react";
import AnimalCard from "../../common/components/animalCard/AnimalCard";
import { AnimalListWrapper } from "./AnimalListWrapper";
import MoreAnimalCard from "../../common/components/animalCard/MoreAnimalCard";

const AnimalList = ({ groupOfAnimal, name }) => {
  return (
    <AnimalListWrapper>
      <h3 className="animal-list-title">{name}</h3>
      <div className="content-wrapper">
        {groupOfAnimal.slice(0, 9).map((animal, index) => (
          <AnimalCard animal={animal} key={animal.name + index} id={name} />
        ))}
        {groupOfAnimal.length > 9 && <MoreAnimalCard name={name} />}
      </div>
    </AnimalListWrapper>
  );
};
export default AnimalList;
