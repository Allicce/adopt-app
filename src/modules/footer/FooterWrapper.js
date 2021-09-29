import styled from "styled-components";
import background from "../../assets/img/dog-4415649_1920.jpg";
import * as color from "../../styles/abstracts/colourVariables";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const FooterWrapper = styled.footer`
  padding-top: 3rem;
  color: ${color.WHITE};
  display: grid;
  grid-template-columns: 1fr repeat(4, 2fr) 1fr;
  grid-template-rows: 1fr 10rem;
  gap: 2rem;
  background: linear-gradient(rgba(51, 51, 51, 0.96), rgba(51, 51, 51, 0.96)),
    url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-align: left;
  font-size: 1.3rem;

  @media only screen and (max-width: ${MEDIA_QUERIES.phone}) {
    display: block;
    padding: 1rem 3rem;
    font-size: 2rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
    font-size: 2rem;
  }

  @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
    grid-template-columns: 1fr repeat(2, 6fr) 1fr;
    grid-template-rows: 1fr 1fr 10rem;
  }

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

    @media only screen and (max-width: ${MEDIA_QUERIES.phone}) {
      font-size: 2.2rem;
    }

    &:after {
      content: "";
      width: 5rem;
      height: 0.4rem;
      position: absolute;
      bottom: -0.8rem;
      left: 0;
      background: ${color.PRIMARY_COLOR};

      @media only screen and (max-width: ${MEDIA_QUERIES.phone}) {
        height: 0.2rem;
      }
    }
  }

  h4 {
    color: ${color.PRIMARY_COLOR};
  }

  .address {
    .email {
      padding-top: 4rem;

      & span {
        font-weight: bold;
      }
    }
  }

  .phone {
    & span {
      font-weight: bold;
    }
  }

  .links {
    grid-column: 2/3;
  }

  .account {
    @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
      grid-column: 2/3;
      grid-row: 2/3;
    }
  }

  .hours {
    @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
      grid-column: 3/4;
      grid-row: 2/3;
    }
  }

  .small-footer {
    grid-column: 2/-2;
    grid-row: 2/3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
      grid-row: 3/4;
    }

    .copyright {
      font-size: 1.3rem;
    }

    .social-media {
      display: flex;
      width: 5%;
      justify-content: space-around;
      align-items: center;

      @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
        width: 25%;
      }

      @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
        width: 10%;
      }

      & > div {
        width: 1.2rem;
        height: 1.2rem;
        padding: 0.4rem;
        background: ${color.PRIMARY_COLOR_DARKER};
        border-radius: 50%;
        border: 1px solid ${color.WHITE};
        cursor: pointer;

        @media only screen and (max-width: ${MEDIA_QUERIES.tab_landscape}) {
          width: 2rem;
          height: 2rem;
          padding: 1rem;
        }

        @media only screen and (max-width: ${MEDIA_QUERIES.medium_desktop}) {
          width: 1.3rem;
          height: 1.3rem;
          padding: 0.4rem;
        }

        & > img {
          width: 100%;
          filter: invert(1);
        }
      }
    }
  }
`;
