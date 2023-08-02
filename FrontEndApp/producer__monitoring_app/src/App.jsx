import MainLogin from "./components/main-page/MainLogin";
import MangedPage from "./components/feature/monitoring/MangedPage";

import { useState } from "react"
import { Route, Routes,  } from "react-router-dom";
import { create } from "zustand";

export const useStore = create(set => {
})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true) 
  return (<>
    <div className="main-page relative flex flex-col min-h-screen select-none
      bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
      <div className=" flex-1 flex">
        <Routes>
          <Route path="/" element={!isLoggedIn? <MainLogin setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />: <MangedPage/>}/>
        </Routes>  
      </div>
    </div>
  </>)}

export default App
