import MainLogin from "./components/pages/main-page/MainPage";
import ManagementPage from "./components/pages/management-page/ManagementPage";

import useStore from "./components/states/LoginState";
import { Route, Routes,  } from "react-router-dom";

function checkLoggedIn() {
  
}

function App() {
  const {isLoggedIn} = useStore (state => state)
  return (<>
    <div className="relative flex flex-col min-h-screen select-none main-page bg-slate-200">
      <div className="flex flex-1 ">
        <Routes>
          <Route path="/" element={!isLoggedIn? <MainLogin/>: <ManagementPage/>}/>
        </Routes>  
      </div>
    </div>
  </>)}

export default App
