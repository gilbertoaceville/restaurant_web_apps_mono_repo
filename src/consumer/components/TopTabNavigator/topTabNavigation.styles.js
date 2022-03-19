import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .bloc-tabs {
    display: flex;
    width: 40%;
    flex-direction: row;
    justify-content: space-around;
  }
  .tabs {
    text-align: center;
    width: 10%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-weight: bold;
    cursor: pointer;
  }
  .tabs:not(:last-child) {
  }

  .active-tabs {
    color: #f38b1c;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    border-bottom: 2px solid #f38b1c;
  }

  .active-tabs::before {
    display: block;
    width: calc(100% + 2px);
    height: 5px;
    background: rgb(88, 147, 241);
  }

  button {
    border: none;
  }
  .content-tabs {
    flex-grow: 1;
  }
  .content {
    background: white;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .content h2 {
    padding: 0px 0 5px 0px;
  }
  .content hr {
    width: 100px;
    height: 2px;
    background: #222;
    margin-bottom: 5px;
  }
  .content p {
    width: 100%;
    height: 100%;
  }
  .active-content {
    display: block;
  }
`;
