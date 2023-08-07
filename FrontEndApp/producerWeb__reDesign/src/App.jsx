import SignUp from "./components/feature/signup/SignUp";
import MainPage from "./components/pages/mainPage/MainPage";
import ManagementPage from "./components/pages/managementPage/ManagementPage";

import useStore from "./components/states/LoginState";
import { Route, Routes, Navigate } from "react-router-dom";

function checkLoggedIn() {
  
}

function App() {
  const {isLoggedIn} = useStore (state => state)
  return (<>
    <div className="relative flex flex-col min-h-screen select-none main-page bg-slate-200">
      <div className="flex flex-1 ">
        {isLoggedIn && (<Navigate to="/ManagementPage" />)}
        <Routes>
          <Route path="/*" element={isLoggedIn ? <Navigate to="/ManagementPage"/> : <MainPage/>  }/>
          <Route path="/ManagementPage" element={isLoggedIn ? <ManagementPage /> : <Navigate to="/" />} />
        </Routes>  
      </div>
    </div>
  </>)}

export default App
