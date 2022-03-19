import React, { useState } from "react";
import { Input, InputContainer, Label } from "./input.styles";

const InputComponent = ({
  label = "Username",
  placeholder = "Enter details",
  type = "text",
  val,
  required,
  margin
}) => {
  const [value, setValue] = useState(val);
  return (
    <InputContainer>
      <Label>{label}</Label>
      <Input
        margin={margin}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        value={value}
        required={required}
        type={type}
      />
    </InputContainer>
  );
};

export default InputComponent;
