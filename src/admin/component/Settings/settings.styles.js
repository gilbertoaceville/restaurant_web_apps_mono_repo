import styled from "styled-components";


const font = "12px";
const txtColor = "#707070";
export const SettingsWrapper = styled('div')`

`
export const Settings = styled('div')`
 height: max-content;
  width: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border-radius: 15px;
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
