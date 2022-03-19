import styled from "styled-components";

export const Container = styled.div`
  height: 39px;
  background: #f38b1c 0% 0% no-repeat padding-box;
  padding: 0 0 0 5em;
  display: flex;
  align-items: center;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;

  .header-section {
    color: #fff;
    display: flex;
    align-items: center;
  }

  .header-section-wrap {
  }

  .header-section-wrap > header {
      cursor: pointer;
  }

  .header-section-wrap > header > h2 {
    font-size: 14px;
    display: inline-flex;

    svg {
      margin-right: 5px;
    }
  }

  .category-list, .show-category-list {
    list-style: none;
    height: auto;
    width: 250px;
    padding: 1.5em 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    box-shadow: 0px 1px 5px #00000029;
    color: #000;
    position: absolute;
    top: 23px;
    transform: translateX(-150%);
    transition: .2s ease-in-out;
  }
  
  .show-category-list {
    transform: translateX(0);
  }

  .category-list li, .show-category-list li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.5px solid #e9e9e9;
    padding: 10px 15px;
    margin: 5px 0;
  }

  @media (max-width: 750px) {
    padding: 0 0.5em;

    .header-section {
      justify-content: space-between;
      width: 100%;
    }

    .category-list, .show-category-list {
      position: fixed;
      width: 100%;
      left: 0;
      top: -3%;
      height: 100vh;
      z-index: 1;
      background: #fff9ec;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .category-list li, .show-category-list li {
      border: none;
      padding: 0;
      font-weight: 550;
      margin: 2em 0;
      display: block;
      font-size: 20px;
    }

    .category-list li .arrow, .show-category-list li .arrow {
      display: none;
    }
  }
`;
