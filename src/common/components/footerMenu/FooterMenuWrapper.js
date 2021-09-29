import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

export const FooterMenuWrapper = styled.ul`
  margin: 0;
  padding: 0;

  li {
    padding: 1rem 2rem 1rem 0;
    list-style: none;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 1px dashed ${color.WHITE};
    }

    a {
      color: ${color.WHITE};
      text-decoration: none;
    }
  }
`;
