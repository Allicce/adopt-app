import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../../styles/abstracts/mediaQueryVariable";

export const NavbarWrapper = styled.nav`
  .menu-items {
    width: 100%;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${color.PRIMARY_COLOR_DARK};

    a {
      color: ${color.WHITE};
      text-transform: uppercase;
      text-decoration: none;
    }

    a.navbar-active {
      color: ${color.PRIMARY_COLOR_LIGHT};
    }

    @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
      height: 100%;
      width: 70%;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: 7rem;
      font-size: 2rem;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 9;
      opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
      visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

      a {
        padding: 1rem 2rem;
        text-align: left;
      }
    }
  }
`;
