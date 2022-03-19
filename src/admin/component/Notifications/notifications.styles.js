import styled from "styled-components";


const font = "12px";
const txtColor = "#707070";
export const NotificationsWrapper = styled('div')`

`
export const Notifications = styled('div')`
  height: max-content;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  background-color: none;
  transition: background-color 100ms ease-in-out;
&:hover{
  border-radius: 15px;
  background-color: #70707015;

   svg{
    color: #f38b1c;
  }
}
`;


export const Icon = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  font-size: 1.5rem;
  color: ${txtColor};
  position: relative;

`;

export const Text = styled.div`
  height: 50%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 11px;
  color: ${txtColor};
`;


export const Messages = styled.div`
 height:10px;
width:  10px;
right: 3px;
  top: -1px;
  display: flex;
  justify-content: center;
  padding: 1px;
  align-items: center;
  font-size: 9px;
  font-weight: bold;
  border: 2px solid #fff;
  border-radius: 50%;
  background-color: red;
  color: #fff;
  position: absolute;
`;