import React from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Navbar } from "../../common/components/navbar/Navbar";

const Header = () => {
  return (
    <HeaderWrapper>
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side"></div>
    </HeaderWrapper>
  );
};
export default Header;
