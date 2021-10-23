import React from "react";
import { useHistory } from "react-router-dom";
import { MoreAnimalCardWrapper } from "./MoreAnimalCardWrapper";

const MoreAnimalCard = ({ name }) => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/${name}`);
  };

  return (
    <MoreAnimalCardWrapper onClick={handleOnClick}>
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
