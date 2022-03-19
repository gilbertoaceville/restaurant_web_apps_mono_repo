import styled from "styled-components";

export const CartContainer = styled.main`
  .cart-wrapper {
    display: flex;
    justify-content: center;
    padding: 1em 2em 0 2em;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
  }

  .cart-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    grid-gap: 1em;
  }

  .cart-left-layout,
  .cart-right-layout {
    border-right: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .cart-right-layout {
    border: none;
  }

  .btn-container input {
    margin: 0 !important;
  }

  @media (max-width: 750px) {
    .cart-wrap {
      display: flex;
      flex-direction: column;
    }

    .cart-left-layout {
      border: none;
    }
  }
`;

export const FlexLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;
`;

export const SubTitle = styled.p`
  color: ${({ color }) => color || "#7f7f7f"};
  font-size: 14px;
  text-transform: capitalize;
`;

export const SubValue = styled.p`
  color: #000000;
  font-size: 16px;
  position: relative;

  .fa-naira-sign {
    font-size: 10px;
    position: absolute;
    left: -10px;
    top: 2px;
  }
`;

export const Separator = styled.div`
  height: 1px;
  width: 300px;
  background: #ccc;
  margin: 0.5em auto;
`;
