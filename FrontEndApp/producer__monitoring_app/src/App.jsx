import MainLogin from "./components/feature/login/MainLogin";
import MangedPage from "./components/feature/monitoring/MangedPage";

import useStore from "./components/states/LoginState";
import { Route, Routes,  } from "react-router-dom";


function App() {
  const {isLoggedIn} = useStore (state => state)
  return (<>
    <div className="relative flex flex-col min-h-screen select-none main-page bg-slate-200">
      <div className="flex flex-1 ">
        <Routes>
          <Route path="/" element={!isLoggedIn? <MainLogin/>: <MangedPage/>}/>
        </Routes>  
      </div>
    </div>
  </>)}

export default App
