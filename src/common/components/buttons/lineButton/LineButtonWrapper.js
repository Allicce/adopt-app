import styled from "styled-components";
import * as color from "../../../../styles/abstracts/colourVariables";

export const LineButtonWrapper = styled.div`
  font-size: 0.8rem;
  width: fit-content;
  border-bottom: 2px solid ${color.WHITE};
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  margin-left: auto;
  margin-right: 2rem;
  margin-bottom: 3rem;
  background: linear-gradient(
    to top,
    ${color.WHITE} 0,
    ${color.WHITE} 50%,
    transparent 50%
  );
  background-size: 100% 220%;
  transition: all 0.4s;
  cursor: pointer;

  &:hover {
    background-position: 100% 100%;
    color: ${color.GREY_6};
    border-bottom: 2px solid ${color.BLUE_COLOR_DARK};
  }
`;
