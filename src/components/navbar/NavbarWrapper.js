import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

export const NavbarWrapper = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: ${color.PRIMARY_COLOR_DARK};

  .left-side {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    a {
      color: ${color.WHITE};
      text-transform: uppercase;
      text-decoration: none;
    }

    a.navbar-active {
      color: ${color.PRIMARY_COLOR_LIGHT};
    }
  }
`;
