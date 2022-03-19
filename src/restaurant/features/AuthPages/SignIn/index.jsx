import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import {
  ForgotPassword,
  ButtonHolder as SignInButtonHolder,
  Form,
  Input,
  Label,
} from "./signIn.styles";



const SignIn = ({ onClick }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => { router.prefetch("/restaurant/dashboard") });

  const onSubmit = () => {
    router.push("/restaurant/dashboard");
    setPassword('');
    setUsername('');
    console.log('username', username, "password:", password);

  }
  return (
    <Form>
      {/* SIGN IN */}
      <Label>Username</Label>
      <br />
      <Input
        onChange={e => setUsername(e.target.value)}
        placeholder="Enter your full name"
        value={username}
        require={true}
      /> <br />
      <br />
      <Label>Password</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="*** *** ***"
        value={password}
      />
      <br />
      <ForgotPassword onClick={onClick}>
        {"Forgot Password?"}
      </ForgotPassword>

      <SignInButtonHolder>
        <Input
          onClick={onSubmit}
          type="submit"
          value="SignIn"
          style={{
            background: "#F38B1C",
            marginTop: "15px",
            cursor: "pointer",
            color: "#fff",
            font: "normal normal bold 14px/19px Open Sans",
          }}
        />
      </SignInButtonHolder>
    </Form>

  );
};

export default SignIn;
