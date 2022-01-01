import styled from "styled-components";
import * as color from "../../styles/abstracts/colourVariables";

import team1 from "../../assets/img/team1.png";
import team2 from "../../assets/img/team2.png";
import team3 from "../../assets/img/team3.png";
import team4 from "../../assets/img/team4.png";

export const AboutUsWrapper = styled.section`
  .container {
    width: 100%;
    position: relative;

    .image-container {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 25rem;

      .team {
        background-repeat: no-repeat;
        background-position: center;
      }

      .team1 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url(${team1});
      }

      .team2 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url(${team2});
      }

      .team3 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url(${team3});
      }

      .team4 {
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.35),
            rgba(0, 0, 0, 0.35)
          ),
          url(${team4});
      }
    }
  }

  .button-container {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    z-index: 10;
  }

  .content-container {
    width: 80%;
    margin: 2rem auto;

    h2 {
      text-align: left;
      font-size: 2.2rem;
      margin: 2rem 0;
      color: ${color.PRIMARY_COLOR_DARK};
    }

    p {
      font-size: 1.8rem;
    }
  }
`;
