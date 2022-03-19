import styled from "styled-components";

export const DropDownMenuWrapper = styled.div``;

export const Container = styled.div`
  position: relative;
  display: inline-block;

  .button {
    padding: 0px 3px;
    border: 0;
    // display: flex;
    // align-items: baseline;
    background-color: transparent;
    cursor: pointer;
    outline: 0;
    font-size: 10px;
  }

  .dropdown-wrapper {
    position: absolute;
    top: 100%;
    left: 0;
    width: 150px;
    padding: 5px 2px;
    border-radius: 10px;
    z-index: 2;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14); 
    background: #fff;
  
  }

  .dropdown-menu {
    list-style: none;
    padding: 0 5px;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;

    &:hover {
        background-color: #70707015;
        cursor: pointer;
      }

    &__item {
      padding: 8px 5px;
      display: flex;
      align-items: center;
    }
    
    .icon{
      flex-basis: 10%;
    }
    
    .text{
      flex-basis: 90%;
    }
  }
`;
export { };
