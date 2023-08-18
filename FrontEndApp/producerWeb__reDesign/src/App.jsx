import HomePage from "./pages/home/HomePage";
import SignInPage from "./pages/signIn/SignInPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import DashBoardPage from "./pages/dashBoard/DashBoardPage";
import { Route, Routes, BrowserRouter, Navigate,  } from "react-router-dom";
import { getCookie } from "./hooks/reactCookie";

const checkLogin = () => {
  let accessToken = getCookie('accessToken')
    return !!accessToken
}

function App() {
  // check Login
  const isToken = checkLogin();
  const isLogin = isToken;
  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<HomePage /> } />        
              <Route path="/signin" element={isLogin ? <Navigate to="/dashboardpage" />  : <SignInPage/>} />        
              <Route path="/signup" element={isLogin ? <Navigate to="/dashboardpage" />  : <SignUpPage/>} />        
              <Route path="/dashboardpage" element={isLogin ? <DashBoardPage />  : <Navigate to="/signin"/>} />
            </Routes>  
          </BrowserRouter>
        </div>
      </div>     
    </div>
</>)}

export default App
