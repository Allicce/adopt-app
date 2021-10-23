import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../../styles/abstracts/mediaQueryVariable";

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
  cursor: pointer;

  .animalCard-information {
    color: ${color.WHITE};
    padding: 1rem;

    h3 {
      margin: 0.2rem;
      font-size: 2rem;

      @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
        font-size: 1.5rem;
      }
    }

    p {
      margin: 0;
      padding: 0;
      font-size: 1.4rem;

      @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
        font-size: 1.2rem;
      }
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
      width: 1.8rem;
      padding: 0.5rem;

      @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
        width: 1.5rem;
        padding: 0.3rem;
      }

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
      width: 2rem;

      @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
        width: 1.7rem;
      }
    }

    .mars,
    .femenine {
      border-radius: 3px;
      margin-right: 1rem;

      @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
        margin-right: 0.5rem;
      }
    }

    .mars {
      background-color: ${color.PRIMARY_COLOR};
    }

    .femenine {
      background-color: ${color.RED_COLOR_DARK};
    }
  }
`;
