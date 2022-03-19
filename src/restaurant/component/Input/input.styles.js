import styled from "styled-components";

export const InputContainer = styled.div`
    
`;

export const Input = styled.input`
  margin: ${({margin})=> margin || "0 0 16px 0"};
  border: 1px solid #bec5d1;
  border-radius: 12px;
  opacity: 1;
  width: 300px;
  height: 32px;
  text-indent: 1rem;
  color: ${({ color }) => (color ? color : "#7F7F7F")};

  &::placeholder {
    color: #bec5d1;
  }
  &:focus {
    outline: none;
  }

  @media(max-width: 280px){
    width: 250px;
  }
`;

export const Label = styled.label`
  font: normal normal 500 14px/36px -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  letter-spacing: 0px;
  padding: 5px 10px;
  color: #000000;
  margin-bottom: 5px;
  text-transform: capitalize;
  ${'' /* text-indent: 1rem; */}
  display: block;
`;