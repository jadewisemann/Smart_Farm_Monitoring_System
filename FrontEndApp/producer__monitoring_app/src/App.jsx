import { useState } from "react"
import GoManagementPage from "./components/main-page/GoManagementPage"
import MainHero from "./components/main-page/MainHero";
import MainNavbar from "./components/main-page/MainNavbar";
function App() {

  const [userLevel, setUserLevel] = useState();
  const [isLoggedIn, setIsLogggedIn] = useState(false)
  return (
    <>
      <div className="main-page relative flex flex-col bg-slate-300">
        <MainNavbar />
        <div className=" max-w-3xl mx-auto px-3">
          <div className="main-content flex flex-col align-middle p-20"> 
              {isLoggedIn 
                ? <>
                  <GoManagementPage />
                </>
              : <>
                <MainHero />
                </>
              }
          </div>
        </div>
      </div>
    </>
  )
}

export default App
