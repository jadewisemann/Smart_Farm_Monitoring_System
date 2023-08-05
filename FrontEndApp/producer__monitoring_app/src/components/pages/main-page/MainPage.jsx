// assets
// hooks
// component
import MainHeader from "./MainHeader";
import LoginInsidePage from "../../feature/login/LoginInsidePage";
import SignUpInsidePage from "../../feature/signup/SignUpInsidePage";
import { Route, Routes } from "react-router-dom";
export default function MainPage() {
  return (<>
    <div className="flex-1 flex items-center justify-center mx-2 md:mx-auto max-w-[90rem] ">
      <div className="flex flex-col min-w-[90%] min-h-[90%]  border-black border-2 bg-purple-200">   
        <MainHeader />
        <div className="flex flex-1 w-full my-auto bg-slate-200"  >
          <div className="box-border flex flex-col items-center justify-center flex-1 px-4 border-black md:border-r-2" >
            <Routes>
              <Route path="/*" element={<LoginInsidePage/>}/>
              <Route path="/SignUp" element={<SignUpInsidePage/>}/>
              <Route path="/SignIn" element={<LoginInsidePage/>}/>
            </Routes>
          </div>
          <div className="items-center justify-center flex-1 hidden w-full text-3xl font-extrabold bg-gradient-to-r from-teal-200 to-lime-200 md:flex">
            <span className="p-4"> image will planted</span>
          </div>
          
        </div>
      
      </div>
    </div>
  </>)}
