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
    color: ${color.WHITE};
    padding: 1rem;

    h3 {
      margin: 0.2rem;
    }

    p {
      margin: 0;
      padding: 0;
    }
  }

  .animalCard-images {
    display: flex;
    align-items: flex-end;
    padding: 1rem;
    height: 100%;

    .mars,
    .like,
    .heart,
    .femenine {
      width: 1.2rem;
      padding: 0.3rem;

      img {
        display: block;
        width: 100%;
      }
    }

    .mars,
    .like,
    .femenine {
      img {
        filter: invert(100%);
      }
    }

    .like,
    .heart {
      width: 1.5rem;
    }

    .mars,
    .femenine {
      border-radius: 3px;
      margin-right: 0.5rem;
    }

    .mars {
      background-color: ${color.PRIMARY_COLOR};
    }

    .femenine {
      background-color: ${color.RED_COLOR_DARK};
    }
  }
`;
