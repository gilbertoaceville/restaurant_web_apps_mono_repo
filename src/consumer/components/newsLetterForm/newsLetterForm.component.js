import React from "react";
import Button from "../../../restaurant/component/Button/button.component";
import { Input } from "../../../restaurant/component/Input/input.styles";
import { FormContainer } from "./newsLetterForm.styles";

const NewsLetterForm = () => {
  return (
    <FormContainer>
      <div className="form-header">
        <header>
          <h2>New to iHub?</h2>
        </header>
        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
      </div>
      <div className="form-wrap">
        <div className="form-input">
          <i className="fa-solid fa-envelope"></i>
          <Input type="email" name="email" required={true} placeholder="Your Email" />
        </div>
        <div className="form-btn">
          <Button value="Submit" />
        </div>
      </div>
    </FormContainer>
  );
};

export default NewsLetterForm;
