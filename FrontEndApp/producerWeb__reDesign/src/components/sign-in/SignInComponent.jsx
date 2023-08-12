// mui
import {
  Checkbox, TextField, Button, FormControlLabel, Link,
} from "@mui/material";
// hooks
import { useState } from "react"
import axios from "axios";
import { setCookie } from "../../../hooks/reactCookie";
import { Navigate } from "react-router-dom";
import { LogInAPI } from "../../../constant/serverUrl";

export default function SignInComponent() {
  // cookie
  // api
  // state
  const [userId, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [button, setButton] = useState(true);

  // function
  const changeButton = () => {
    userPassword.length >= 5 ? setButton(false) : setButton(true)
  };

  const handleSubmit = async () => {
    const response = await signIn({ userId, userPassword });
    response.status == 200
      ? redirection()
      : alert("wrong password or email");
  }

  // signIN
  const signIn = async ({ userId, userPassword }) => {
    try {
      const response = await axios.post(LogInAPI, {
        userId: userId,
        password: userPassword,
      });
      const jwtAccessToken = response.data.accessToken;
      const jwtRefreshToken = response.data.refreshToken;
      setCookie('accessToken', jwtAccessToken);
      setCookie('refreshToken', jwtRefreshToken, {expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)});
      return response;
    }
    catch (error) { console.log(error) }
  }
  const redirection = () => { 
    return <Navigate to="/ManagementPage" />
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
            handleSubmit({ userId, userPassword })
          }}
      >Sign in</Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link href="/SignUp">Sign Up ? </Link>
    </div>
  </>)}