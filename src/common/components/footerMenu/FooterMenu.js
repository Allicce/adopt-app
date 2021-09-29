import React from "react";
import { Link } from "react-router-dom";
import { FooterMenuWrapper } from "./FooterMenuWrapper";

const FooterMenu = () => {
  return (
    <FooterMenuWrapper>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/">Animals for adoption</Link>
      </li>
      <li>
        <Link to="/">Adoption process</Link>
      </li>
    </FooterMenuWrapper>
  );
};
export default FooterMenu;
