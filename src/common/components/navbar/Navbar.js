import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "./NavbarWrapper";
import Hamburger from "../hamburger/Hamburger";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarWrapper isOpen={isOpen}>
      <div className="menu-items">
        <NavLink exact activeClassName="navbar-active" to="/">
          Home
        </NavLink>
        <NavLink exact activeClassName="navbar-active" to="/a">
          Animals for adoption
        </NavLink>
        <NavLink exact activeClassName="navbar-active" to="/b">
          Adoption process
        </NavLink>
        <NavLink exact activeClassName="navbar-active" to="/c">
          Help
        </NavLink>
        <NavLink exact activeClassName="navbar-active" to="/d">
          About us
        </NavLink>
      </div>
      <div>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
    </NavbarWrapper>
  );
};
