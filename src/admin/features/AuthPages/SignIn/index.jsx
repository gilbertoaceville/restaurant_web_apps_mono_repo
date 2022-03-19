import { useEffect, useState } from 'react'
import { useRouter } from "next/router";
import {
  ForgotPassword,
  ButtonHolder as SignInButtonHolder,
  Form,
  Input,
  Label,
} from "./signIn.styles";
// import Link from 'next/link'


const SignIn = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  useEffect(() => {
    router.prefetch("/admin/dashboard")
  router.prefetch("/admin/auth/forgot-password")
  });

  const onSubmit = () => {
    router.push('/admin/dashboard')
    setPassword('')
    setUsername('')
    console.log('username', username, "password:", password);
  }

  return (
    <Form>
      {/* SIGN IN */}
      <Label>Username</Label>
      <br />
      <Input
        onChange={e => (setUsername(e.target.value))}
        placeholder="Enter your full name"
        value={username}
        require={true}
      /> <br />
      <br />
      <Label>Password</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => (setPassword(value))}
        placeholder="*** *** ***"
        value={password}
      />
      <br />
      <ForgotPassword onClick={()=>router.push("/admin/auth/forgot-password")}>
        {"Forgot Password?"}
      </ForgotPassword>

      <SignInButtonHolder>
        {/* <Link href={'/admin/dashboard'} > */}
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
        {/* </Link> */}
      </SignInButtonHolder>
    </Form>

  );
};

export default SignIn;
