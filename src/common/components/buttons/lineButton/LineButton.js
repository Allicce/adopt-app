import React from "react";
import { LineButtonWrapper } from "./LineButtonWrapper";

const LineButton = ({ type, children, bigger, smaller }) => {
  return <LineButtonWrapper type={type}>{children}</LineButtonWrapper>;
};

LineButton.defaultProps = {
  type: "primary",
};

export default LineButton;
