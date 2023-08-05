import { Link, TextField, Button} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUpInsidePage() {
  // api
  const SignUpAPI = ""
  // state
  const [button, setButton] = useState(true);
  const [userFirstName, setUserFirstName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  // hooks
  const navigate = useNavigate()
  // function
  const changeButton = () => {
    userFirstName.length >= 1 && userLastName.length >= 1 && userEmail.includes('@') && userPassword.length >= 5
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
  const submitSignUP = ({userFirstName, userLastName,userEmail, userPassword}) => {
    fetch(SignUpAPI, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userFirstName: userFirstName,
        userLastName:userLastName,
        userEmail: userEmail,
        userPassword: userPassword,
      })
    })  
    .then(res => res.json())
    .then(res=> res.isSuccess ==  true)
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
              autoComplete="given-name" name="firstName"
              id="firstName" label="First Name"
              onChange={e => setUserFirstName(e.target.value)}
              onKeyUp={changeButton}/>
          </div>
          <div className="">
            <TextField required fullWidth
              name="lastName"autoComplete="family-name"
              id="lastName" label="Last Name"
              onChange={e => setUserLastName(e.target.value)}
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
            submitSignUP({ userFirstName, userLastName, userEmail, userPassword }),
            navigate("/")
          }}
        > Sign Up </Button>
        <div className="flex">
          <div className="mt-2 ml-auto">
            <Link href="/" variant="body2">
              Already have an account? Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>)}
