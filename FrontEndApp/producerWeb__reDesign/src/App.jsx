import MainPage from "./pages/home/MainPage";
import ManagementPage from "./pages/private/management/ManagementPage";
import { Route, Routes, BrowserRouter, Navigate  } from "react-router-dom";
import { getCookie } from "./hooks/reactCookie";

const checkLogin = () => {
  console.log(getCookie('accessToken'))
  return getCookie('accessToken') ? true : false
}

function App() {

  const isLogin = checkLogin()

  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={isLogin?  <Navigate to='/managementPage'/> :<MainPage /> } />
              <Route path="/managementPage" element={ isLogin? <ManagementPage /> : <Navigate to='/'/>} />
            </Routes>  
          </BrowserRouter>
        </div>
      </div>     
    </div>
</>)}

export default App
