import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

export const HelpCardWrapper = styled.div`
  border: 1px solid ${color.PRIMARY_COLOR_DARK};
  border-radius: 1rem;
  width: 40rem;

  .help-card-title {
    color: ${color.PRIMARY_COLOR_DARK};
    text-align: center;
    font-size: 2.5rem;
    margin-top: 2rem;
  }

  .help-card-image {
    width: 15rem;
    margin: 0 auto;
    min-height: 20rem;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }

  .help-card-description {
    font-size: 1.8rem;
    width: 80%;
    margin: 0 auto 3rem auto;
    text-align: center;
  }

  .help-card-buttons {
    width: 90%;
    display: grid;
    justify-content: flex-end;
    grid-template-columns: repeat(2, minmax(1rem, auto));
    margin-bottom: 3rem;
    gap: 1rem;
  }
`;
