import React from "react";
import { HelpUsWrapper } from "./HelpUsWrapper";
import dog from "../../assets/img/dog.png";
import qr from "../../assets/img/qr.png";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import helpCards from "../../assets/helpCard.json";
import HelpCard from "../../common/components/helpCard/HelpCard";

export const HelpUs = ({}) => {
  return (
    <HelpUsWrapper>
      <div className="header">
        <h2>Help us</h2>
      </div>
      <div className="main-wrapper">
        <div className="left-side">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incidid unt ut labore et dolore magna aliqua.
          </p>
          <p>Mauris augue neque gravida in fermentum et.</p>
        </div>
        <div className="right-side">
          <div>
            <img src={dog} />
          </div>
        </div>
      </div>
      <div className="account-wrapper">
        <div className="right-side">
          <div>
            <img src={qr} />
          </div>
        </div>
        <div className="left-side">
          <h4>Our transparent account</h4>
          <p className="account">EX47 2121 1009 0000 0002 3569 8741</p>
          <RectangleButton type="dark" className="button-position">
            Want to help
          </RectangleButton>
        </div>
      </div>

      {helpCards && (
        <div className="other-way-to-help">
          <h3>Other way to help</h3>
          <div className="help-card-container">
            {helpCards.map((card) => (
              <HelpCard
                title={card.title}
                imageUrl={card.imageUrl}
                description={card.description}
                buttons={card.buttons}
              />
            ))}
          </div>
        </div>
      )}
    </HelpUsWrapper>
  );
};
