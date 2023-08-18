//ui
import { Link, TextField, Button} from "@mui/material";
// components
import { requestSignUp } from "../../services/requestSignUp";
// hook
import { useState } from "react";
import {  useNavigate } from "react-router-dom";


export default function SignUpComponent() {
  // hooks
  const navigate = useNavigate()
  // internal state
  const [button, setButton] = useState(true);
  const [userId, setUserId] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // msg
  const errorMessage = useState('sign up rejected')
  //function
  const redirection = () => navigate("/signIn")
  const inputValidation = () => {
    userId.length >= 4 && userEmail.includes('@') && userPassword.length >= 5
      ? setButton(false) : setButton(true)
  }

  const handleSubmit = async ({ userId, userEmail, userPassword }) => {
    const response = await requestSignUp({ userId, userEmail, userPassword });
    response?.status === 200
      ? redirection()
      : alert(errorMessage)
  };
  return (<>
    <div className="text-5xl font-extrabold mb-[4%]">
      Sign up
    </div>
    <div className="flex flex-col items-center w-full max-w-sm md:max-w-md xl:max-w-xl" >
      <div  noValidate onSubmit={handleSubmit}>
        <div className="flex w-full mb-2">
          <div className="mr-2">
            <TextField autoFocus required fullWidth
              autoComplete="userId " name="userId"
              id="userId" label="user id"
              onChange={e => setUserId(e.target.value)}
              onKeyUp={inputValidation}/>
          </div>
        </div>
        <div className="mb-2">
          <TextField required fullWidth
            name="email" autoComplete="email"
            id="email" label="Email Address"
            onChange={e => setUserEmail(e.target.value)}
            onKeyUp={inputValidation}/>
        </div>
        <div className="mb-2">
          <TextField required fullWidth
            name="password" label="Password" type="password"
            id="password" autoComplete="new-password"
            onChange={e => setUserPassword(e.target.value)}
            onKeyUp={inputValidation}/>
        </div>
        <Button fullWidth type="submit" variant="contained" 
          disabled={button}
          onClick={e => { 
            e.stopPropagation(),
            handleSubmit({ userId, userEmail, userPassword })
          }}> Sign Up </Button>
        <div className="flex">
          <div className="mt-2 ml-auto">
            <Link href="/signin">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>)}
