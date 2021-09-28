import styled from "styled-components";
import background from "../../assets/img/dog-4415649_1920.jpg";
import * as color from "../../styles/abstracts/colourVariables";

export const FooterWrapper = styled.footer`
  padding-top: 3rem;
  color: ${color.WHITE};
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1rem;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
  font-size: 1.3rem;

  & > div {
    padding: 1rem;
  }

  h3 {
    text-transform: uppercase;
    font-family: "Play", sans-serif;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;
    margin-bottom: 3rem;
    position: relative;

    &:after {
      content: "";
      width: 5rem;
      height: 0.4rem;
      position: absolute;
      bottom: -0.8rem;
      left: 0;
      background: ${color.PRIMARY_COLOR};
    }
  }
  .links {
    grid-column: 2/3;
  }

  .small-footer {
    grid-column: 2/-2;
    grid-row: 2/3;
  }
`;
