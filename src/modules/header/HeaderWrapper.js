import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const HeaderWrapper = styled.header`
  background-color: ${color.PRIMARY_COLOR_DARK};
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left-side {
    margin-left: 2rem;
    width: 40%;
    height: inherit;
  }

  .right-side {
    margin-right: 2rem;

    & button:first-child {
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
    height: 5rem;

    .left-side {
      margin: 0 1rem;
      width: 60%;
    }
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
    height: 7rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
    .left-side {
      width: 55%;
    }
  }
`;
