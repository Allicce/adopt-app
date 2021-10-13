import styled from "styled-components";
import { MEDIA_QUERIES } from "../../styles/abstracts/mediaQueryVariable";

export const AnimalListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-bottom: 4rem;

  .animal-list-title {
    text-align: left;
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
    width: 90%;
  }

  @media only screen and (min-width: ${MEDIA_QUERIES.big_desktop}) {
    width: 80%;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
    grid-auto-rows: 20rem;
    gap: 1rem;
    width: 100%;

    @media only screen and (min-width: ${MEDIA_QUERIES.phone}) {
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 2rem;
    }

    @media only screen and (min-width: ${MEDIA_QUERIES.tab_landscape}) {
      grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
      grid-auto-rows: 15rem;
      gap: 1rem;
    }

    @media only screen and (min-width: ${MEDIA_QUERIES.big_desktop}) {
      grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
      gap: 2rem;
    }
  }
`;
