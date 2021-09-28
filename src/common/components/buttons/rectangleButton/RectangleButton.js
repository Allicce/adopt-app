import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const RectangleButton = ({ type, children }) => {
  return <ButtonWrapper type={type}>{children}</ButtonWrapper>;
};

RectangleButton.defaultProps = {
  type: "primary",
};

export default RectangleButton;
