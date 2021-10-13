import React from "react";
import AnimalCard from "../../common/components/animalCard/AnimalCard";
import { AnimalListWrapper } from "./AnimalListWrapper";

const AnimalList = ({ groupOfAnimal, name }) => {
  return (
    <AnimalListWrapper>
      <h2 className="animal-list-title">{name}</h2>
      <div className="content-wrapper">
        {groupOfAnimal.map((animal, index) => (
          <AnimalCard animal={animal} key={animal.name + index} id={name} />
        ))}
      </div>
    </AnimalListWrapper>
  );
};
export default AnimalList;
