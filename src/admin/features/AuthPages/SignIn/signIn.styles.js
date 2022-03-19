import styled from "styled-components";



export const Form = styled.form`
  height: 100%;
  width: max-content;
`;

export const Input = styled.input`
  margin-bottom: 16px;
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
`;

export const Label = styled.label`
  font: normal normal 600 14px/36px Open Sans;
  letter-spacing: 0px;
  width: 100vw;
  padding: 5px 10px;
  color: #000000;
  margin-bottom: 5px;
  text-indent: 1rem;
`;

export const ButtonHolder = styled.div`
  padding: 20px 5px;
`;

export const ForgotPassword = styled.div`
  color: #f38b1c;
  cursor: pointer;
  float: right;
  font: normal normal 600 14px/36px Open Sans;
  margin-top: -1rem;
`;
