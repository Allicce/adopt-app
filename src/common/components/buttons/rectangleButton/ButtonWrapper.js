import styled from "styled-components";
import * as color from "../../../../styles/abstracts/colourVariables";

export const ButtonWrapper = styled.button`
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
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
