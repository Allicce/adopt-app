import React from "react";
import { HelpCardWrapper } from "./HelpCardWrapper";
import RectangleButton from "../buttons/rectangleButton/RectangleButton";
import food from "../../../assets/img/food.png";
import volunteering from "../../../assets/img/volunteer.png";

const HelpCard = ({ title, imageUrl, description, buttons }) => (
  <HelpCardWrapper>
    <h4 className="help-card-title">{title}</h4>
    <div className="help-card-image">
      <img
        src={imageUrl === "food" ? food : volunteering}
        alt={`${title}-image`}
      />
    </div>
    <p className="help-card-description">{description}</p>
    <div className="help-card-buttons">
      {buttons &&
        buttons.map((button) => (
          <RectangleButton>{button.name}</RectangleButton>
        ))}
    </div>
  </HelpCardWrapper>
);

export default HelpCard;
