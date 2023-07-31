import { useState } from "react"



export default function MainLogin({isLoggedIn, setIsLoggedIn}) {
  
  const realId = "123@gmail.com"
  const realPw = "123123"
  
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [button, setButton] = useState(true);

  const changeButton = () => {
    id.includes('@') && pw.length >=5 ? setButton(false) :setButton(true)
  }
  return (
    <>
      <div className="hero ">
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
                  onChange={e => { setId(e.target.value) }}
                  onKeyUp={changeButton}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered"
                  onChange={e => { setPw(e.target.value) }}
                  onKeyUp={changeButton}
                />
                  <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Find Account</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={button} onClick={e => {
                  realId === id && realPw === pw
                    ? (
                      e.stopPropagation()
                      
                    ): alert('wrong!')
                }}>Login</button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="#">
              <a href="">
                Sign up
              </a>
            </label>
          </div>
        </div>
      </div>
    </>
  )
}
