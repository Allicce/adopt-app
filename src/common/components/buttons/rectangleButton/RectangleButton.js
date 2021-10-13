import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const RectangleButton = ({ type, children, bigger, smaller }) => {
  return (
    <ButtonWrapper type={type} bigger={bigger} smaller={smaller}>
      {children}
    </ButtonWrapper>
  );
};

RectangleButton.defaultProps = {
  type: "primary",
};

export default RectangleButton;
