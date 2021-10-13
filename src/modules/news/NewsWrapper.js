import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const NewsWrapper = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))
    ${color.PRIMARY_COLOR};
  color: ${color.WHITE};
  flex: 100% 0 0;
  order: 2;

  @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
    flex: 30% 0 0;
    order: -1;
  }

  h3 {
    margin: 0;
  }
`;
