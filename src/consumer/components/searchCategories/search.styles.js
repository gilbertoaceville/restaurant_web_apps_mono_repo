import styled from "styled-components";

export const SearchCategoryContainer = styled.div`
  width: 354px;
  height: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 1px 5px #0000000f;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  margin-left: 4em;

  .search-category-input {
    height: 100%;
    background: transparent;
    border: none;
    text-indent: 20px;
    width: 85%;
    border-radius: inherit;
    outline: none;
  }

  .search-icon-container {
    background: #f38b1c 0% 0% no-repeat padding-box;
    border-radius: inherit;
    opacity: 0.4;
    width: 45px;
    display: flex;
    justify-content: center;
    height: 100%;
  }

  @media (max-width: 750px) {
    width: 70%;
    margin-left: 0;

    .search-category-input {
      padding-right: 10px;
      text-indent: 10px;
    }
  }
`;
