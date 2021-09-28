import React from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Navbar } from "../../common/components/navbar/Navbar";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import { RED_COLOR_DARK } from "../../styles/abstracts/colourVariables";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        <RectangleButton type="red">Sign up</RectangleButton>
        <RectangleButton>Sign in</RectangleButton>
      </div>
    </HeaderWrapper>
  );
};
export default Header;
