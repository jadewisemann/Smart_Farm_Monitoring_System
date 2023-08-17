import MainPage from "./pages/home/MainPage";
import ManagementPage from "./pages/private/management/ManagementPage";
import { Route, Routes, BrowserRouter, Navigate  } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
function App() {

const{ isLoggedin} = useAuth()
  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/*" element={ <MainPage /> } />
                <Route path="/managementPage" element={isLoggedin ?  <ManagementPage /> : <Navigate to='/signin'/> } />
              </Routes>  
            </BrowserRouter>
          </AuthProvider>
        </div>
      </div>     
    </div>
</>)}

export default App
