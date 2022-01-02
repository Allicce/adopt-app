import React from "react";
import GoogleButtonWrapper from "./GoogleButtonWrapper";
import googleLogo from "../../../../assets/img/Google__G__Logo.svg";

const GoogleButton = ({ children }) => {
  return (
    <GoogleButtonWrapper>
      <div className="google-wrapper">
        <img src={googleLogo} alt="Google logo" />
      </div>
      <span>{children}</span>
    </GoogleButtonWrapper>
  );
};

export default GoogleButton;
