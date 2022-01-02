import styled from "styled-components";
import * as color from "../../../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../../../styles/abstracts/mediaQueryVariable";

export const GoogleButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  padding: 1px 1rem 1px 1px;
  border-radius: 0.3rem;
  border: none;
  outline: none;
  box-shadow: 8px 5px 7px 1px rgba(0, 0, 0, 0.36);
  text-transform: uppercase;
  cursor: pointer;
  background-color: ${color.WHITE};
  color: ${color.GREY_6};
  transition: all 0.3s ease-in-out;
  font-size: ${({ bigger, smaller }) =>
    bigger ? "1.3rem" : smaller ? "0.7rem" : "1rem"};

  ${({ smaller }) => smaller && "letter-spacing: 0.3rem"};

  @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
    font-size: ${({ bigger }) => (bigger ? "1.1rem" : "0.8rem")};
    padding: ${({ bigger }) => (bigger ? "0.8rem 1.8rem" : "0.5rem 1.6rem")};
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
    font-size: ${({ bigger }) => (bigger ? "1.7rem" : "1.5rem")};
  }

  &:hover,
  &:active {
    background-color: #4285f4;
    color: ${color.WHITE};
    transform: scale(1.05);

    .google-wrapper {
      background-color: ${color.WHITE};
    }
  }

  &:active {
    box-shadow: 2px 2px 7px 1px rgba(0, 0, 0, 0.78);
  }

  .google-wrapper {
    padding: 0.5rem;
    img {
      width: 80%;
    }
  }

  span {
    padding-left: 1rem;
  }
`;

export default GoogleButtonWrapper;
