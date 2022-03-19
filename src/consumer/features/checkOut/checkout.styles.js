import styled from "styled-components";

export const CheckoutContainer = styled.main`
  height: auto;
  width: 70%;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 20px;
  box-shadow: 0 8px 8px -4px #333;
  position: relative;
  padding: .5em 1em;
  display: grid;
  grid: 1fr/repeat(2, 1fr);
  grid-gap: 0 1em;

  .left-layout {
      border-right: 1px solid #ccc;
  }

  .separator {
      height: 1px;
      width: 100%;
      background: #ccc;
      margin: 2em auto;
  }

  .btn {
      display: flex;
      justify-content: center;
  }

  @media(max-width: 1025px) {
      width: 80%;
  }

  @media(max-width: 768px) {
      width: 90%;
  }

  @media(max-width: 750px) {
      grid: 1fr/ repeat(1, 1fr);
      width: 100%;
      border-radius: unset;
      grid-gap: 0;
      height: 100%;
      position: fixed;
      overflow-y: scroll;

      .left-layout {
          border: none;
      }

      .separator {
          display: none;
      }
  }
`;
