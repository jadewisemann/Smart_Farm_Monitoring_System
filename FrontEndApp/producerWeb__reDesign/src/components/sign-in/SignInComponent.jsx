import { Checkbox, TextField, Button, FormControlLabel, Link, } from "@mui/material";

import { useState } from "react"
import { requestSignIn } from "../../services/requestSignIn";
import { isLoginAtom } from "../../recoil/isLogInAtom";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function SignInComponent() {
  const [userId, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [button, setButton] = useState(true);
  const errorMessage = 'login failed'

  const setIsLogin = useSetRecoilState(isLoginAtom)

  const navigate = useNavigate();

  const inputValidation = () => {
    userPassword.length >= 8 ? setButton(false) : setButton(true)
  };

  const handleSubmit = async ({ userId, userPassword }) => {
    const response = await requestSignIn({ userId, userPassword });
    console.log(response)
    console.log(response.status)
    response?.status === 200 ? (
      console.log('tr ue'),
      setIsLogin(true),
      redirection()
    ) : alert(errorMessage)
  }

  const redirection = () => {
    console.log('redirect')
    navigate('/managementPage ')
  }
    
  return (<>
    {/* sign In, Header */}
    <div className="text-5xl font-extrabold mb-[4%]">
      Sign In
    </div>
    {/* sign In, Body */}
    <div className="flex flex-col items-center w-full max-w-sm md:max-w-md"> 
      <TextField required fullWidth autoFocus label="Email Address" name="email" autoComplete="email" 
        onChange={e => setUserEmail(e.target.value)}
        onKeyUp={inputValidation}/>
      <TextField label="Password" name="password" type="password" autoComplete="current-password" required fullWidth
        sx={{ mb: 1, mt: 2 }}
        onChange={e => setUserPassword(e.target.value)}
        onKeyUp={inputValidation} />
      <div className="self-stretch ">
        <FormControlLabel
          control={<Checkbox value="Remember" color="primary" />} label="remember me" />
      </div>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 1, mb: 4 }} disabled={button}
        onClick={e => {
          e.stopPropagation();
          handleSubmit({ userId, userPassword });
        }}> Sign in </Button>
      <Link > Forgot password? </Link>
      <div> or</div>      
      <Link href="/SignUp">Sign Up ? </Link>
    </div>
  </>)}