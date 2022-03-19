import React,{useEffect} from "react";
import Button from "../../../../lib/components/Button/";
import InputComponent from "../../../../lib/components/Input/input.component";
import { Text } from "./forgotPassword.styles";
import Link from 'next/link';

const ForgotPasswordPage = () => {

  return (
    <div>
     <Link href={'/'} prefetch={true}>HOME</Link> 
      Forgot Password Under Construction
      {/* <InputComponent
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
        onClick={()=>{}}
        >Sign in</span>
      </Text>
      <Button value="Submit" /> */}
    </div>
  );
};  

export default ForgotPasswordPage;
