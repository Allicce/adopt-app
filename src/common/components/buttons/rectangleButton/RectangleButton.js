import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const RectangleButton = ({ type, children, bigger, smaller, handleClick }) => {
  return (
    <ButtonWrapper
      type={type}
      bigger={bigger}
      smaller={smaller}
      onClick={handleClick}
    >
      {children}
    </ButtonWrapper>
  );
};

RectangleButton.defaultProps = {
  type: "primary",
};

export default RectangleButton;
