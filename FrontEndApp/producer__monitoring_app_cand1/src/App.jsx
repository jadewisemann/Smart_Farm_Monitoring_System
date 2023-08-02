import { useState } from "react"
import MainNavbar from "./components/main-page/MainNavbar";
import MainLogin from "./components/main-page/MainLogin";
import TitleOnlyHeader from "./components/main-page/TitleOnlyHeader";
import MangedPage from "./components/feature/monitoring/MangedPage";

import { create } from "zustand";

export const useStore = create(set => {
})

function App() {

  const [isLoggedIn, setIsLogggedIn] = useState(true) 
  return (
    <>
      <div className="main-page relative flex flex-col min-h-screen 
        bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
        <div className=" flex-1 flex">
          <div className={`flex  items-center justify-center flex-1 mx-0 md:mx-auto ${isLoggedIn ? "max-w-3xl md:max-w-[80%]" : "max-w-3xl"}`}>
            <div className=" min-w-[90%] min-h-[90%] flex flex-col rounded-3xl
              bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 "> 
              {isLoggedIn  ? <MainNavbar /> : <TitleOnlyHeader />} 
              <div className=" flex-1 flex mt-[-10%]">
                {isLoggedIn 
                  ? <>
                    <MangedPage/>
                  </> 
                  : <>
                    <MainLogin/>
                  </>
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
