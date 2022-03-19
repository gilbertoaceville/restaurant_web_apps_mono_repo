import styled from "styled-components";

export const DropDownMenuWrapper = styled.div``;

export const Container = styled.div`
  position: relative;
  display: inline-block;
  /* height: 100vh; */

  .button {
    padding: 0px 3px;
    border: 0;
    // display: none;
    // align-items: baseline;
    background-color: transparent;
    cursor: pointer;
    outline: 0;
    font-size: 10px;
    display: none;

    @media (max-width: 750px) {
      display: block;
    }
  }

  .dropdown-wrapper {
    position: relative;
    left: 0;
    // width: 150px;
    padding: 0 2px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14);
    background: #fff;
    height: 100%;
  }

  .dropdown-menu {
    list-style: none;
    padding: 5px 5px;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;

    &:hover {
      background: #fff9ec 0% 0% no-repeat padding-box;
      cursor: pointer;
      color: #f38b1c;
    }

    &__item {
      padding: 8px;
      display: flex;
      align-items: center;
    }

    .icon {
      flex-basis: 20%;
    }

    .text {
      flex-basis: 80%;
    }
  }

  .dropdown-last-wrap {
    position: absolute;
    width: 99%;
    bottom: 5%;
  }

  .dropdown-penultimate-Item {
    background: #000000 0% 0% no-repeat padding-box;
    color: #ffffff;
    list-style: none;
    padding: 5px 0;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    &__item {
      padding: 8px;
      display: flex;
      align-items: center;
    }

    .icon {
      flex-basis: 20%;
    }

    .text {
      flex-basis: 80%;
    }
  }

  @media (max-width: 750px) {
    .dropdown-menu {

      &__item {
        padding: 4px 8px;
        display: flex;
        align-items: center;
      }
    }

    .dropdown-wrapper {
      // top: 0;
      // bottom: 0;
      left: 0;
      right: 0;
    }
  }
`;
export {};
