import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

export const NewsWrapper = styled.div`
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))
    ${color.PRIMARY_COLOR};
  color: ${color.WHITE};
  flex: 30% 0 0;

  h3 {
    margin: 0;
  }
`;
