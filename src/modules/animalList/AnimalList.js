import React from "react";
import AnimalCard from "../../common/components/animalCard/AnimalCard";
import animalInShelter from "../../assets/animalInShelter.json";
import { AnimalListWrapper } from "./AnimalListWrapper";

const AnimalList = () => {
  console.log(animalInShelter);
  return (
    <AnimalListWrapper>
      <h2 className="animal-list-title">Animal list</h2>
      <div className="content-wrapper">
        {animalInShelter.dogs.map((animal, index) => (
          <AnimalCard animal={animal} key={animal.name + index} />
        ))}
      </div>
    </AnimalListWrapper>
  );
};
export default AnimalList;
