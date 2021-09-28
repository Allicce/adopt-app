import React from "react";
import { HamburgerWrapper } from "./HamburgerWrapper";

const Hamburger = (props) => {
  const { isOpen, setIsOpen } = props;

  const handleBurgerMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HamburgerWrapper isOpen={isOpen} onClick={handleBurgerMenu}>
      <div />
      <div />
      <div />
    </HamburgerWrapper>
  );
};
export default Hamburger;
