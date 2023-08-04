// mui
import {
  Checkbox, TextField, Button, FormControlLabel, Link,
} from "@mui/material";
// hooks
import { useState } from "react"
import useStore from "../../states/LoginState";


export default function LoginForPage() {
  //zustand
  const {setLogIn} = useStore(state=>state)
  // dummy data
  const realId = "1@"
  const realPw = "123123"
  // api
  const LogInAPI = ''
  // state
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');
  const [button, setButton] = useState(true);
  // function
  const changeButton = () => {
    userId.includes('@') && userPw.length >= 5 ? setButton(false) : setButton(true)
  };
  const submitLogin = ({userId, userPw}) => {
    fetch(LogInAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
      username: userId,
      password: userPw,
      })
    })
    .then(res => res.json())
    .then(json=> json)
    .catch(null)
  }

  return (
    <div className="flex flex-col items-center  max-w-sm md:max-w-md xl:max-w-xl w-full"> 
      <TextField label="Email Address" name="email" autoComplete="email" required fullWidth autoFocus
      onChange={e=>setId(e.target.value)} onKeyUp={changeButton} />
      <TextField label="Password" name="password" type="password" autoComplete="current-password" required fullWidth
        sx={{ mb: 1, mt: 2 }} onChange={e => setPw(e.target.value)} onKeyUp={changeButton}/>
      <div className=" self-stretch">
        <FormControlLabel
          control={<Checkbox value="Remember" color="primary" />} label="remember me" />
      </div>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 4 }}
        disabled={button} onClick={e => {
          realId === userId && realPw === userPw ? (
            e.stopPropagation(),
            setLogIn()
          ) : {};
          const userInfo = submitLogin({ id: userId, pw: userPw });
          typeof userInfo !== Object ? (
            e.stopPropagation(),
            setLogIn()
          ) : alert('wrong!');
      }}>Sign in</Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link >Sign Up </Link>
    </div>
  )
}