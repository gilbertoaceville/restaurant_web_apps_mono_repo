import styled from "styled-components";

export const NewsLetterWrapper = styled.section`
  background: #f38b1c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  .store-header {
    font-size: 16px;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1em 20px;
  }

  @media (max-width: 750px) {
    padding: 1em 10px;
  }
`;

export const Container = styled.footer`
  height: auto;
  padding: 3em 0;
  background: #fad1a4 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 6px #00000029;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  a {
    text-decoration: none;
    color: inherit;
  }

  .nav {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .nav header h4 {
    font-size: 18px;
    color: #000000;
  }

  .nav ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .nav ul li {
    color: #000000;
    margin: 10px 0;
    font-size: 14px;
    cursor: pointer;
  }

  .nav ul li:hover {
    color: #666667;
  }

  .payment-section header h4 {
    margin-bottom: 10px;
  }

  .img-wrap {
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;

    .nav {
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 1em 0;
    }
  }

  @media (max-width: 750px) {
    padding: 1em 10px;
    .nav {
      grid-template-columns: repeat(1, 1fr);
      grid-gap: 1em 0;
    }
  }
`;
