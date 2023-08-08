// mui
import {
  Checkbox, TextField, Button, FormControlLabel, Link,
} from "@mui/material";
// hooks
import { useState } from "react"
import useStore from "../../states/LoginState";

export default function SignInInsidePage() {
  //zustand
  const {setLogIn} = useStore(state=>state)
  // dummy data
  const realId = "1@"
  const realPw = "123123"
  // api
  const LogInAPI = ''
  // state
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [button, setButton] = useState(true);
  // function
  const changeButton = () => {
    userEmail.includes('@') && userPassword.length >= 5 ? setButton(false) : setButton(true)
  };
  const submitLogin = ({userEmail, userPassword}) => {
    fetch(LogInAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      userEmail: userEmail,
      userPassword: userPassword,
      })
    })  
    .then(res => res.json())
    .then(json=> json)
    .catch(null)
  }

  return (<>
    <div className="text-5xl font-extrabold mb-[4%]">
      Sign In
    </div>
    <div className="flex flex-col items-center w-full max-w-sm md:max-w-md"> 
      <TextField required fullWidth autoFocus
        label="Email Address" name="email" autoComplete="email" 
        onChange={e => setUserEmail(e.target.value)}
        onKeyUp={changeButton} />
      <TextField label="Password" name="password" type="password" autoComplete="current-password" required fullWidth
        sx={{ mb: 1, mt: 2 }}
        onChange={e => setUserPassword(e.target.value)}
        onKeyUp={changeButton} />
      <div className="self-stretch ">
        <FormControlLabel
          control={<Checkbox value="Remember" color="primary" />} label="remember me" />
      </div>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 4 }}
        disabled={button}
        onClick={e => {
          realId === userEmail && realPw === userPassword ? (
            e.stopPropagation(),
            setLogIn()
          ) : {};
          const userInfo = submitLogin({ userEmail, userPassword });
          typeof userInfo !== Object ? (
            e.stopPropagation(),
            setLogIn()
          ) : alert('wrong!');
      }}>Sign in</Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link href="/SignUp">Sign Up ? </Link>
    </div>
  </>)}