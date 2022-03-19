/*
 * component: CustomFormTextArea
 * author: 
 */

import React from "react";
import { TextareaWrapper } from "./textarea.styles";

 const TextArea = ({ label, placeholder }) => {
  return (
    <TextareaWrapper>
      <div className="input-container">
        {label && <label htmlFor="">{label}</label>}
        <div className="field">
          <textarea placeholder={placeholder} />
        </div>
      </div>
    </TextareaWrapper>
  );
};
export default  TextArea;

