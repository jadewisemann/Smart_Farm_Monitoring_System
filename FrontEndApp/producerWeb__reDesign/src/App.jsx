import MainPage from "./components/pages/mainPage/MainPage";
import ManagementPage from "./components/pages/managementPage/ManagementPage";
import useStore from "./components/states/LoginState";
import { Route, Routes, Navigate } from "react-router-dom";


function App() {
  const {isLoggedIn} = useStore (state => state)
  return (<>
    <div className=" bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
      <div className="relative flex flex-col min-h-screen select-none">
        <div className="flex flex-col items-center justify-center w-screen h-screen">
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
