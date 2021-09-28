import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../../styles/abstracts/mediaQueryVariable";

export const HamburgerWrapper = styled.div`
  opacity: 0;
  visibility: hidden;
  width: 4rem;
  height: 3rem;
  display: flex;
  justify-content: space-around;
  flex-flow: column nowrap;
  z-index: 10;
  position: absolute;
  top: 2rem;
  left: 2rem;

  & > div {
    width: 4rem;
    height: 0.37rem;
    border-radius: 10px;
    //${color.WHITE}
    background-color: black;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(45deg)" : "rotate(0)")};
      width: ${({ isOpen }) => (isOpen ? "3rem" : "4rem")};
    }

    &:nth-child(2) {
      transform: ${({ isOpen }) =>
        isOpen ? "translateX(100%)" : "translateX(0)"};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ isOpen }) => (isOpen ? "rotate(-45deg)" : "rotate(0)")};
      width: ${({ isOpen }) => (isOpen ? "3rem" : "2.8rem")};
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
    opacity: 1;
    visibility: visible;
  }
`;
