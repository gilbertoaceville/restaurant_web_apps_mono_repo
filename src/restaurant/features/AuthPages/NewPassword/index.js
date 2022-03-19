import React from "react";
import Button from "../../../component/Button/button.component";
import InputComponent from "../../../component/Input/input.component";
import { Text } from "../../../component/passwordSection/password.styles";
import PasswordLayout from "../../../component/passwordSection/passwordsec.component";

const NewPasswordPage = () => {
  return (
    <PasswordLayout
      title="Change New Password"
      text="Enter a different password with the previous"
      formHeight="300px"
    >
      <InputComponent
        type="password"
        required={true}
        placeholder="**** **** ****"
        label="New Password"
      />
      <InputComponent
        type="password"
        required={true}
        placeholder="**** **** ****"
        label="Confirm Password"
      />
      <Button value="Submit" />
    </PasswordLayout>
  );
};

export default NewPasswordPage;
