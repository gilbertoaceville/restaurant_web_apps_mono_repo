import styled from "styled-components";

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

export const LogoWrapper = styled("div")`
height: 15%;
padding: 5px;
`;

export const DrawerLogo = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-sizing: border-box;
  cursor: pointer;
  
  `;