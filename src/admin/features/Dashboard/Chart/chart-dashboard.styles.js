import styled from "styled-components";

export const AllCardsWrap = styled.section`
  padding: 2em 20px 0 20px;
  display: flex;
  align-items: flex-start;

  .left-layout {
    margin: 0 20px 0 0;
  }

  .right-layout {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1em;
  }

  @media (max-width: 1024px) {
    .right-layout {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;

    .right-layout {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 750px) {

    .left-layout {
        width: 100%;
    }

    .right-layout {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
