import { useState } from "react"
import TitleOnlyHeader from "../../main-page/TitleOnlyHeader";

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
    <div className="flex-1 flex items-center justify-center mx-0 md:mx-auto max-w-3xl ">
      <div className="flex flex-col min-w-[90%] min-h-[90%]  border-black border-2 bg-white">        
      <TitleOnlyHeader />
      <div className="hero">
        <div className="hero-content  flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">Log-In</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered"
                  onChange={e => { setId(e.target.value) }} onKeyUp={changeButton}    />
              </div>
                
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                  </label>
                  
                <input type="text" placeholder="password" className="input input-bordered"
                    onChange={e => { setPw(e.target.value) }} onKeyUp={changeButton} />
                
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Find Account</a>
                </label>  
              </div>
                
              <div className="form-control mt-6">
                  <button className="btn btn-primary" disabled={button} onClick={e => {
                    realId === userId && realPw === userPw ? (
                    e.stopPropagation(),
                    setIsLoggedIn(true)
                    ) : {}; 
                    const userInfo = submitLogin({ id: userId, pw: userPw });
                    typeof userInfo !== Object
                    ? (
                    e.stopPropagation(),
                    setUserLogIn(userInfo)
                    ): alert('wrong!')
                  }}>Login</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="#">
              <a href=""> Sign up </a>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  </>)}
