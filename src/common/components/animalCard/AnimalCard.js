import React from "react";
import mars from "../../../assets/img/mars.svg";
import like from "../../../assets/img/like.svg";
import dog1 from "../../../assets/img/dog1.jpeg";
import { AnimalCardWrapper } from "./AnimalCardWrapper";

const AnimalCard = (props) => {
  return (
    <AnimalCardWrapper background={dog1}>
      <div className="animalCard-information">
        <h3>Name</h3>
        <p>age</p>
      </div>
      <div className="animalCard-images">
        <div className="mars">
          <img src={mars} />
        </div>
        <div className="like">
          <img src={like} />
        </div>
      </div>
    </AnimalCardWrapper>
  );
};
export default AnimalCard;
