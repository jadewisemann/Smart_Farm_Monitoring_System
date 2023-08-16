import MainPage from "./pages/home/MainPage";
import ManagementPage from "./pages/private/management/ManagementPage";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom'
import ProtectedRoute from "./routes/ProtectedRoutes";

function App() {
  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={<MainPage />} />
              <Route element ={<ProtectedRoute/>} >
                <Route path="/ManagementPage" element={<ManagementPage />} />
              </Route>
            </Routes>  
          </BrowserRouter>
        </div>
      </div>     
    </div>
</>)}

export default App
