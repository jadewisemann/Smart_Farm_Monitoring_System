// assets
// hooks
// component
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import SignUpPage from "../signUpPage/SignUpPage";
import SignInPage from "../signInPage/SignInPage";
import MainPageContent from "./MainPageContent";
export default function MainPage() {
  return (<>
    <div className="flex flex-col items-center w-screen h-full">
      <div>
        <MainHeader/> 
      </div>
      <div className="">
        <Routes>
          <Route path="/" element={<MainPageContent/>}> </Route>
          <Route path="/signup" element={<SignUpPage />}></Route>
          <Route path="/signin" element={<SignInPage/>}></Route>
        </Routes> 
      </div>
      <div>
        footer
      </div>
  </div>
  </>)
}
