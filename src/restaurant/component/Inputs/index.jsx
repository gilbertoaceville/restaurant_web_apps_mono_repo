/*
 * component: CustomFormInput
 * author: 
 */

import React from "react";
import { InputWrapper } from "./input.styles";

 const CustomInput = ({ label, placeholder }) => {
  return (
    <InputWrapper>
      <div className="input-container">
        {label && <label htmlFor="">{label}</label>}
        <div className="field">
          <input placeholder={placeholder} />
        </div>
      </div>
    </InputWrapper>
  );
};
export default  CustomInput;

