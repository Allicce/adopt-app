import React from "react";
import mars from "../../../assets/img/mars.svg";
import femenine from "../../../assets/img/femenine.svg";
import like from "../../../assets/img/like.svg";
import heart from "../../../assets/img/heart.svg";
import dog1 from "../../../assets/img/dog1.jpeg";
import dog2 from "../../../assets/img/dog2.jpeg";
import dog3 from "../../../assets/img/dog3.jpg";
import cat1 from "../../../assets/img/cat1.jpg";
import cat2 from "../../../assets/img/cat2.jpg";
import cat3 from "../../../assets/img/cat3.jpg";
import { AnimalCardWrapper } from "./AnimalCardWrapper";

const AnimalCard = ({ animal, id }) => {
  return (
    <AnimalCardWrapper
      background={
        id === "dogs"
          ? animal.img === "dog1"
            ? dog1
            : animal.img === "dog2"
            ? dog2
            : dog3
          : animal.img === "cat1"
          ? cat1
          : animal.img === "cat2"
          ? cat2
          : cat3
      }
    >
      <div className="animalCard-information">
        <h3>{animal.name}</h3>
        <p>{animal.age}</p>
      </div>
      <div className="animalCard-images">
        {animal.gender === "male" ? (
          <div className="mars">
            <img src={mars} />
          </div>
        ) : (
          <div className="femenine">
            <img src={femenine} />
          </div>
        )}
        {animal.liked ? (
          <div className="heart">
            <img src={heart} />
          </div>
        ) : (
          <div className="like">
            <img src={like} />
          </div>
        )}
      </div>
    </AnimalCardWrapper>
  );
};
export default AnimalCard;
