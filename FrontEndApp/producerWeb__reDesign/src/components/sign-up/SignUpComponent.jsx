import { Link, TextField, Button} from "@mui/material";
import axios from "axios";
import { useState } from "react";


export default function SignUpComponent() {
  // api
  const SignUpAPI = "http://165.246.116.74:8080/members/signup"
  // state
  const [button, setButton] = useState(true);
  const [userId, setUserId] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // function
  const changeButton = () => {
    userId.length >= 4 && userEmail.includes('@') && userPassword.length >= 5
      ? setButton(false) : setButton(true)
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  // login Logics
  

  const submitSignUP = ({ userId, userEmail, userPassword }) => {
    axios.post(SignUpAPI, {
        userId: userId,
        email: userEmail,
        password: userPassword,
    }).then(res =>
      res.status == 200
        ? console.log(res)
        : res.status = 409
          ? console.log(res)
          : res.status == 403
            ? console.log(res)
            : {}
    )
      .catch(error => console.log(error)) 
  }

  const oldSubmitSignUP = ({ userId, userEmail, userPassword }) => {
    console.log(JSON.stringify({
        userId: userId,
        userEmail: userEmail,
        userPassword: userPassword,
      })),
    fetch(SignUpAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: userId,
        userEmail: userEmail,
        rawPassword: userPassword,
      })
    })
      .then(res => res.json())
      .then(res => res.isSuccess == true
        ? console.log('suc'):console.log('fail'))
    .catch(null)
  }


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
              onKeyUp={changeButton}/>
          </div>
        </div>
        <div className="mb-2">
          <TextField required fullWidth
            name="email" autoComplete="email"
            id="email" label="Email Address"
            onChange={e => setUserEmail(e.target.value)}
            onKeyUp={changeButton}/>
        </div>
        <div className="mb-2">
          <TextField required fullWidth
            name="password" label="Password" type="password"
            id="password" autoComplete="new-password"
            onChange={e => setUserPassword(e.target.value)}
            onKeyUp={changeButton}/>
        </div>
        <Button fullWidth type="submit" variant="contained" 
          disabled={button}
          onClick={e => { 
            e.stopPropagation,
              submitSignUP({ userId, userEmail, userPassword }),
              console.log(userId, userPassword, userEmail)
          }}
        > Sign Up </Button>
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
