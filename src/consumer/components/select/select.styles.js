import styled from "styled-components";

export const SelectContainer = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  .method-select p {
    font-size: 14px;
    padding: 5px 10px;
    color: #000000;
    ${"" /* margin-bottom: 5px; */}
    text-transform: capitalize;
    font-weight: 550;
  }

  .method-select select {
    width: 300px;
    border: 1px solid #bec5d1;
    border-radius: 12px;
    opacity: 1;
    width: 300px;
    height: 40px;
    background: transparent;
    text-indent: 0.5em;
    color: #bec5d1;
    outline: none;
    text-transform: capitalize;
  }

  .method-select select option {
    color: #000000;
    text-transform: capitalize;
  }

  @media (max-width: 320px) {
    p,
    label {
      margin: 0;
    }

    .method-select select {
      width: 280px;
    }
  }
`;
