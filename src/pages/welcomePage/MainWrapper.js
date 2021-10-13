import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
    flex-direction: row;
  }

  .content-wrapper {
    flex: 70% 0 0;
  }
`;
