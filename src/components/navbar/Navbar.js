import React from "react";
import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "./NavbarWrapper";

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="left-side">
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
      <div className="right-side"></div>
    </NavbarWrapper>
  );
};
