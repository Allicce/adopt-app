import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const RectangleButton = ({ type, children, bigger }) => {
  return (
    <ButtonWrapper type={type} bigger={bigger}>
      {children}
    </ButtonWrapper>
  );
};

RectangleButton.defaultProps = {
  type: "primary",
};

export default RectangleButton;
