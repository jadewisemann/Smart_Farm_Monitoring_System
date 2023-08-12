import MainPage from "./components/pages/mainPage/MainPage";
import ManagementPage from "./components/pages/managementPage/ManagementPage";
import SignUpPage from "./components/pages/signUpPage/SignUpPage";
import useStore from "./store/LoginState";
import { Route, Routes, Navigate } from "react-router-dom";

function App() {
  const {isLoggedIn} = useStore (state => state)
  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          {isLoggedIn && (<Navigate to="/ManagementPage" />)}
          <Routes>
            <Route path="/*" element={isLoggedIn ? <Navigate to="/ManagementPage"/> : <MainPage/>  }/>
            <Route path="/ManagementPage" element={isLoggedIn ? <ManagementPage /> : <Navigate to="/" />} />
          </Routes>  
        </div>
      </div>     
    </div>
</>)}

export default App
