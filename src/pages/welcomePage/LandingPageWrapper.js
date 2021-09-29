import styled from "styled-components";
import background from "../../assets/img/puppy-1850276_960_720.webp";
import * as color from "../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const LandingPageWrapper = styled.div`
  height: 80vh;
  background: linear-gradient(
      45deg,
      rgba(51, 51, 51, 0.99) 20%,
      rgba(51, 51, 51, 0.3)
    ),
    url(${background});
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  background-size: cover;

  .left-side {
    width: 50%;

    @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
      width: 70%;
    }

    @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
      width: 100%;
    }

    h2 {
      width: 80%;
      font-size: 3rem;
      color: ${color.WHITE};
      padding: 1rem 2rem;
      background: rgba(0, 188, 250, 0.5);
      border-radius: 0.2rem;
      margin: -9rem 0 3rem 15rem;

      @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
        font-size: 2rem;
        margin: -5rem 0 0 8rem;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
        font-size: 2.5rem;
        margin: -8rem auto 0 auto;
      }
    }

    p {
      font-size: 1.8rem;
      color: ${color.WHITE};
      width: 80%;
      margin-left: 0;

      @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
        font-size: 1.3rem;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
        font-size: 2rem;
        margin: 3rem auto 0 auto;
      }
    }

    .cta {
      margin: 4rem 0 0 -20rem;

      @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
        margin: 4rem 0 0 -12rem;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
        margin: 4rem 0 0 -17rem;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
        margin: 5rem auto 0 auto;
      }
    }

    .logo {
      width: 55%;
      margin-left: 10rem;

      @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
        width: 50%;
        margin-left: 10rem;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_portrait}) {
        width: 40%;
        margin: 0 auto;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.phone}) {
        width: 70%;
      }

      img {
        width: 100%;
      }
    }
  }
`;
