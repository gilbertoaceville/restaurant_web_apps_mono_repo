import { useState } from 'react';
import {
  Form,
  Label,
  Input,
  ButtonHolder as CreateAccountButtonHolder,
} from './signUp.styles'



const SignUp: React.FC = () => {

  const [name, setName] = useState('');
  const [branch, setBranch] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const submitValue = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const frmdetails = {
      'Full Name': name,
      'Branch Name': branch,
      'Password': password,
      'Email': email
    }
    console.log(frmdetails);
    setName('');
    setBranch('');
    setEmail('');
    setPassword('');
    
  }


  return (
    <Form>
      <Label>Full Name</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => setName(value)}
        placeholder="Enter your full name"
        value={name}
      /> <br />
      <Label>Email Address</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => setEmail(value)}
        placeholder="e.g example@email.com"
        value={email}
      />
      <br />
      <Label>Password</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => setPassword(value)}
        placeholder="*** *** ***"
        value={password}
      />
      <br />
      <Label>Branch</Label>
      <br />
      <Input
        onChange={({ target: { value } }) => setBranch(value)}
        placeholder="Enter your crunchies branch"
        value={branch}
      />
      <br />
      <CreateAccountButtonHolder>
        <Input
          onClick={submitValue}
          type="submit"
          value="Register"
          style={{
            background: "#F38B1C",
            marginTop: "10px",
            cursor: "pointer",
            color: "#fff",
            font: "normal normal bold 14px/19px Open Sans",

          }}
        />
      </CreateAccountButtonHolder>
    </Form>
  );
}

export default SignUp;
