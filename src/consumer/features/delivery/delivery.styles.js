import styled from "styled-components";

export const DeliveryWrapper = styled.main`
  .delivery-cards-wrapper {
    display: flex;
    justify-content: flex-end;
    padding: 1em 2em;
    align-items: center;
  }

  .delivery-cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 1em;
  }

  @media (max-width: 768px) {
    .delivery-cards-wrapper {
      justify-content: center;
      padding: 1em 0;
    }
  }

  @media (max-width: 750px) {
    .delivery-cards-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
  }
`;
