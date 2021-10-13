import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

export const MoreAnimalCardWrapper = styled.div`
  width: 100%;
  background-color: ${color.PRIMARY_COLOR_DARK};
  border-radius: 5px;
  box-shadow: 2px 3px 8px 4px rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .next-wrapper {
    display: flex;

    .circle {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      border: 2px solid ${color.WHITE};
      margin: 0.3rem;
    }

    .circle1 {
      background-color: ${color.BLUE_COLOR_DARK};
    }

    .circle2 {
      background-color: ${color.PRIMARY_COLOR_DARKER};
    }

    .circle3 {
      background-color: ${color.PRIMARY_COLOR_LIGHT};
    }
  }

  p {
    font-size: 1.5rem;
    color: ${color.WHITE};
    padding: 0;
    margin: 0;
  }
`;
