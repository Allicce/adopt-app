import React, { Component } from "react";
import { AnimalFilter } from "../../common/components/filter/AnimalFilter";
import { BiggerAnimalCard } from "../../common/components/animalCard/BiggerAnimalCard";

class AllTypeOfAnimalPage extends Component {
  render() {
    return (
      <div>
        <AnimalFilter />
        {this.props.allTypeOfAnimalInShelter.map((animal) => (
          <BiggerAnimalCard />
        ))}
      </div>
    );
  }
}

export default AllTypeOfAnimalPage;
