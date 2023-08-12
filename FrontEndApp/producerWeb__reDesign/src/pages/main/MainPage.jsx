// assets
// hooks
// component
import { Route, Routes } from "react-router-dom";
import MainHeader from "./components/MainHeader";
import SignUpPage from "../sign-up/SignUpPage";
import SignInPage from "../sign-in/SignInPage";
import MainPageContent from "./components/MainPageContent";
export default function MainPage() {
  return (<>
    <div className="flex flex-col items-center w-screen h-full">
      <div>
        <MainHeader/> 
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<MainPageContent/>}> </Route>
          <Route path="/signUp" element={<SignUpPage />}></Route>
          <Route path="/signIn" element={<SignInPage/>}></Route>
        </Routes> 
      </div>
      <div>
        footer
      </div>
  </div>
  </>)
}
