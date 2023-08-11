// mui
import {
  Checkbox, TextField, Button, FormControlLabel, Link,
} from "@mui/material";
// hooks
import { useState } from "react"
import useStore from "../../states/LoginState";
import axios from "axios";


export default function SignInInsidePage() {
  //zustand
  const {setLogIn} = useStore(state=>state)

  // api
  const LogInAPI = "http://165.246.116.74:8080/members/login"
  // state
  const [userId, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [button, setButton] = useState(true);
  // function
  const changeButton = () => {
    userPassword.length >= 5 ? setButton(false) : setButton(true)
  };
  const submitLogin = ({ userId, userPassword }) => {
    const userData = {
      userId: userId,
      password: userPassword,
    }; 
    axios
      .post(LogInAPI, userData)
      .then(res => {
        res.data.accessToken;
        res.data.refreshToken;
      })
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
            e.stopPropagation,
            submitLogin({ userId, userPassword }),
            console.log(userId, userPassword)
            
          }}
      >Sign in</Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link href="/SignUp">Sign Up ? </Link>
    </div>
  </>)}