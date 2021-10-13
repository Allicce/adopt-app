import React from "react";
import { MoreAnimalCardWrapper } from "./MoreAnimalCardWrapper";

const MoreAnimalCard = ({ name }) => {
  return (
    <MoreAnimalCardWrapper>
      <div className="next-wrapper">
        <div className="circle circle1" />
        <div className="circle circle2" />
        <div className="circle circle3" />
      </div>
      <p>More</p>
      <p>{name}</p>
    </MoreAnimalCardWrapper>
  );
};

export default MoreAnimalCard;
