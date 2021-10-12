import styled from "styled-components";

export const AnimalListWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 20rem;
    gap: 2rem;
  }
`;
