import React from "react";
import { HelpUsWrapper } from "./HelpUsWrapper";
import dog from "../../assets/img/dog.png";
import qr from "../../assets/img/qr.png";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";

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
        <div className="left-side">
          <div>
            <img src={qr} />
          </div>
        </div>
        <div className="right-side">
          <p>Our transparent account</p>
          <p className="account">EX47 2121 1009 0000 0002 3569 8741</p>
          <RectangleButton type="dark">Want to help</RectangleButton>
        </div>
      </div>
    </HelpUsWrapper>
  );
};
