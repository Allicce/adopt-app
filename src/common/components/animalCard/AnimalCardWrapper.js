import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

export const AnimalCardWrapper = styled.div`
  width: 100%;
  background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 10%,
      rgba(0, 0, 0, 0.2) 60%,
      transparent
    ),
    url(${({ background }) => background});
  background-repeat: no-repeat, no-repeat;
  background-size: cover, cover;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-radius: 5px;
  box-shadow: 2px 3px 8px 4px rgba(0, 0, 0, 0.19);
  .animalCard-information {
  }

  .animalCard-images {
    display: flex;
    align-items: center;
    padding: 1rem;
    height: 100%;

    .mars,
    .like {
      width: 1.2rem;
      padding: 0.3rem;

      img {
        display: block;
        width: 100%;
        filter: invert(100%);
      }
    }

    .mars {
      border-radius: 3px;
      background-color: ${color.PRIMARY_COLOR};
    }
  }
`;
