import styled from "styled-components";
import * as color from "../../../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../../../styles/abstracts/mediaQueryVariable";

export const ButtonWrapper = styled.button`
  padding: ${({ bigger }) => (bigger ? "1.3rem 2.5rem" : "0.7rem 2rem")};
  border-radius: 0.3rem;
  border: none;
  outline: none;
  box-shadow: 8px 5px 7px 1px rgba(0, 0, 0, 0.36);
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${({ type }) =>
    type === "primary"
      ? color.PRIMARY_COLOR_LIGHT
      : type === "red"
      ? color.RED_COLOR_DARK
      : color.PRIMARY_COLOR_DARKER};
  color: ${({ type }) => (type === "primary" ? color.GREY_6 : color.WHITE)};
  transition: all 0.3s ease-in-out;
  font-size: ${({ bigger }) => (bigger ? "1.3rem" : "1rem")};

  @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
    font-size: ${({ bigger }) => (bigger ? "1.1rem" : "0.8rem")};
    padding: ${({ bigger }) => (bigger ? "0.8rem 1.8rem" : "0.5rem 1.6rem")};
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
    font-size: ${({ bigger }) => (bigger ? "1.7rem" : "1.5rem")};
  }

  &:hover,
  &:active {
    background-color: ${({ type }) =>
      type === "primary"
        ? color.PRIMARY_COLOR
        : type === "red"
        ? color.ERROR_RED_COLOR
        : color.PRIMARY_COLOR_DARK};
    color: ${({ type }) => (type !== "primary" ? color.GREY_6 : color.WHITE)};
    transform: scale(1.05);
  }

  &:active {
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.78);
  }
`;
export default ButtonWrapper;
