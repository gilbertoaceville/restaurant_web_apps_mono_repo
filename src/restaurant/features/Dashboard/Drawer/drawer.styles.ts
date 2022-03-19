import styled from "styled-components";

export const FlexibleDiv = styled.div`
  display: flex;
  flex-basis: 33.3%;
  height: max-content;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const DrawerWrapper = styled("div")`
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  .sign-out{
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }
`;

export const List = styled("li")`
  color: #fff;
  display: flex;
  cursor: pointer;
  list-style: none;
  padding: 7px 10px;

  &:hover{
    color: #F38B1C;
    background: #fff;
  }
`;

export const ListIcon = styled("div")`
  padding: 5px;

  svg {
    font-size: 20px;
  }

`;

export const ListText = styled("div")`
  padding: 5px;
  font-size: 14px;
  text-indent: 10px;
  font-weight: bold;

  
`;
