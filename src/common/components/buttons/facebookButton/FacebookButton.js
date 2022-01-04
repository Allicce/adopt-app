import React, { useState } from "react";
import facebookLogo from "../../../../assets/img/facebook_logo.svg";
import facebookLogoWhite from "../../../../assets/img/facebook_logo_white.svg";
import FacebookButtonWrapper from "./FacebookButtonWrapper";

const FacebookButton = ({ children }) => {
  const [isFocused, setFocused] = useState(false);

  const handleOnMouseOver = () => {
    console.log("focus handler");
    setFocused(true);
  };

  const handleOnMouseDown = () => {
    setFocused(false);
  };
  return (
    <FacebookButtonWrapper
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseDown}
    >
      <div className="facebook-wrapper">
        {isFocused ? (
          <img src={facebookLogoWhite} alt="facebook logo" />
        ) : (
          <img src={facebookLogo} alt="facebook logo" />
        )}
      </div>
      <span>{children}</span>
    </FacebookButtonWrapper>
  );
};

export default FacebookButton;
