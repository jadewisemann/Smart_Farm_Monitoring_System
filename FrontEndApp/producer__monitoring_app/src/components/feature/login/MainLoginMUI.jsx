// assets
import flowerShape from "../../../assets/flower-shape.svg"
// hooks
import { useState } from "react"

// component
import TitleOnlyHeader from "../../main-page/TitleOnlyHeader";
import LoginForPage from "./LoginForPage";

export default function MainLogin({isLoggedIn, setIsLoggedIn}) {
  const LogInAPI = ''
  const realId = "1@"
  const realPw = "123123"
  
  const [userId, setId] = useState('');
  const [userPw, setPw] = useState('');

  const [button, setButton] = useState(true);

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
  const setUserLogIn = (userInfo) => {
    setIsLoggedIn(true)
  }

  return (<>
    <div className="flex-1 flex items-center justify-center mx-2 md:mx-auto max-w-[90rem] ">
      <div className="flex flex-col min-w-[90%] min-h-[90%]  border-black border-2 bg-purple-200">   
        <TitleOnlyHeader />
        <div className="flex-1 w-full  my-auto bg-slate-200 flex"  >
          <div className=" flex-1 px-4 flex flex-col items-center box-border justify-center border-black md:border-r-2" >
            <div className="__login-header text-5xl font-extrabold mb-[4%]">
              Login
            </div>
            <LoginForPage />
          </div>
          <div className=" flex-1 hidden  bg-gradient-to-r from-teal-200 to-lime-200 w-full md:flex  items-center justify-center text-3xl font-extrabold">
            <span className="p-4"> image will planted</span>
          </div>
        </div>
      </div>
    </div>
  </>)}
