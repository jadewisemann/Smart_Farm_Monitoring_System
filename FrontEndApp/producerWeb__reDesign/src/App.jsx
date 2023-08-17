import MainPage from "./pages/home/MainPage";
import ManagementPage from "./pages/private/management/ManagementPage";
import { Route, Routes, BrowserRouter, Navigate  } from "react-router-dom";
import useCheckLogin from "./hooks/useCheckLogin";

function App() {
  return (<>
    <div className=" bg-teal-100 h-fit overflow-x-hidden overflow-y-auto">
      <div className="relative flex flex-col  select-none">
        <div className="flex flex-col items-center  w-screen min-h-screen">
          <BrowserRouter>
            <Routes>
              <Route path="/*" element={useCheckLogin? <MainPage /> : <Navigate to='/managementPage'/>} />
              <Route path="/managementPage" element={ useCheckLogin? <ManagementPage /> : <Navigate to='/'/>} />
            </Routes>  
          </BrowserRouter>
        </div>
      </div>     
    </div>
</>)}

export default App
