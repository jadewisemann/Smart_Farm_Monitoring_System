import { useState } from "react"
import { create } from "zustand";

import MainNavbar from "./components/main-page/MainNavbar";
import MainLogin from "./components/main-page/MainLogin";
import TitleOnlyHeader from "./components/main-page/TitleOnlyHeader";
import Management from "./components/management-page/Management";

export const useStore = create(set => {
})

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <div className="main-page relative flex flex-col min-h-screen 
        bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100">
        {isLoggedIn ? <MainNavbar /> : <TitleOnlyHeader/>}
        <div className=" flex-1 flex">
          <div className=" max-w-3xl flex  items-center justify-center flex-1 backdrop-blur-sm rounded-none md:rounded-3xl mx-0 md:mx-auto ">
            <div className="main-content min-w-[70%] min-h-[90%] flex rounded-3xl backdrop-blur-sm
              bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100"> 
                {isLoggedIn 
                ? <>
                  <Management/>
                </> 
                : <>
                  <MainLogin isLoggedIn={ isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                </>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
