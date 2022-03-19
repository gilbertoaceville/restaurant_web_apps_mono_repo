import React,{useEffect} from "react";
import Button from "../../../component/Button/button.component";
import InputComponent from "../../../component/Input/input.component";
import { Text } from "../../../component/passwordSection/password.styles";
import PasswordLayout from "../../../component/passwordSection/passwordsec.component";
import { useRouter } from "next/router";

const ForgotPasswordPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.prefetch("/restaurant");
  }, []);

  return (
    <PasswordLayout>
      <InputComponent
        margin="0"
        type="email"
        label={'Email'}
        required
        placeholder="example@gmail.com"
      />
      <Text color="#7F7F7F">
        Have you remember your password? 
        <span 
        style={{ color: "#F38B1C" }}
        onClick={router.push("/restaurant")}
        >Sign in</span>
      </Text>
      <Button value="Submit" />
    </PasswordLayout>
  );
};  

export default ForgotPasswordPage;
