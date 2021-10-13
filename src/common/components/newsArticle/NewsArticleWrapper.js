import styled from "styled-components";
import * as color from "../../../styles/abstracts/colourVariables";

export const NewsArticleWrapper = styled.div`
  margin: 0 2rem 4rem 2rem;
  background-color: ${color.PRIMARY_COLOR_DARKER};
  border-radius: 5px;
  overflow: hidden;

  .news-header {
    background: linear-gradient(rgba(0, 0, 0, 0.56), rgba(0, 0, 0, 0.56)),
      url(${({ img }) => img});
    height: 10rem;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .date {
      margin: 0;
      align-self: flex-end;
      padding: 1rem 2rem;
      font-size: 1.2rem;
    }

    h4 {
      margin-left: 2rem;
      font-size: 1.3rem;
    }
  }

  .text {
    font-size: 1.2rem;
    width: 90%;
    margin: 0 auto;
    line-height: 1.5rem;
    padding: 2rem 0;
  }
`;
