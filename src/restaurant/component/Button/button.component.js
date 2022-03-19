import React from "react";
import { ButtonContainer, Input } from "./button.styles";

const Button = ({ onSubmit, value = "signIn" }) => {
  return (
    <ButtonContainer>
      <Input
        onClick={onSubmit}
        type="submit"
        value={value}
        style={{
          background: "#F38B1C",
          marginTop: "15px",
          cursor: "pointer",
          color: "#fff",
          font: 'normal normal bold 14px/19px -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
          textTransform: "capitalize",
        }}
      />
    </ButtonContainer>
  );
};

export default Button;
