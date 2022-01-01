import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

export const HelpUsWrapper = styled.section`
  width: 100%;

  .header {
    width: 100%;
    background-color: ${color.PRIMARY_COLOR_DARK};
    color: ${color.WHITE};

    h2 {
      margin: 0;
      padding: 4rem;
      font-size: 2.2rem;
      text-align: left;
    }
  }

  .main-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: 0 auto;

    .left-side {
      flex: 0 0 80%;

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 0 30rem;
        line-height: 1.7;
      }
    }

    .right-side {
      flex: 0 0 40%;

      div {
        width: 50%;
        img {
          width: 100%;
        }
      }
    }
  }

  .account-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto 10rem auto;

    .left-side {
      font-size: 1.5rem;
      flex: 0 0 50%;
      order: -1;

      .account {
        display: block;
        width: 40rem;
        padding: 1.5rem 3rem;
        font-size: 1.8rem;
        background-color: ${color.PRIMARY_COLOR};
        border-radius: 3px;
        color: ${color.WHITE};
      }

      h4 {
        font-size: 1.9rem;
        font-weight: normal;
      }
    }
  }

  .other-way-to-help {
    margin-bottom: 5rem;
    h3 {
      color: ${color.PRIMARY_COLOR_DARK};
      font-size: 2.8rem;
      width: 60%;
      margin: 0 auto 4rem auto;
    }

    .help-card-container {
      width: 60%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
