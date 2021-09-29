import React from "react";
import { FooterWrapper } from "./FooterWrapper";
import FooterMenu from "../../common/components/footerMenu/FooterMenu";
import OpeningHours from "../../common/components/openingHours/OpeningHours";
import instagram from "../../assets/img/instagram.svg";
import facebook from "../../assets/img/facebook.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="links">
        <h3>Important links</h3>
        <FooterMenu />
      </div>
      <div className="address">
        <h3>Contacts</h3>
        <div>
          <h4>Cat and dog shelter</h4>
          <p>Main street 1534/85</p>
          <p>Brno</p>
          <p>600 00</p>
          <p className="email">
            Email: <span>info@catanddogshelter.com</span>
          </p>
          <p className="phone">
            Phone number: <span>+420 123 456 789</span>
          </p>
        </div>
      </div>
      <div className="account">
        <h3>transparent account</h3>
        <h4>EX47 2121 1009 0000 0002 3569 8741</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. At tellus
          at urna condimentum mattis. Ullamcorper a lacus vestibulum sed arcu
          non. Quam lacus suspendisse faucibus interdum posuere lorem. Quis
          varius quam quisque id.
        </p>
      </div>
      <div className="hours">
        <h3>Opening hours</h3>
        <OpeningHours />
      </div>
      <div className="small-footer">
        <div className="copyright">
          <p>
            &copy;2021 Cat and dog shelter | created by{" "}
            <span>Alzbeta Stetiarova</span>
          </p>
        </div>
        <div className="social-media">
          <div>
            <img src={instagram} />
          </div>
          <div>
            <img src={facebook} />
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
