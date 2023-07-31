import { useState } from "react"
import MainNavbar from "./components/main-page/MainNavbar";

function App() {

  const [isLoggedIn, setIsLogggedIn] = useState(false)
  return (
    <>
      <div className="main-page relative flex flex-col min-h-screen bg-slate-300">
        <MainNavbar />
        <div className=" bg-blue-300 flex-1 flex">
          <div className=" max-w-3xl flex  items-center justify-center my-4 flex-1 bg-red-300 rounded-none md:rounded-3xl mx-0 md:mx-auto">
            <div className="main-content"> 
                {isLoggedIn 
                ? <>
                  <div> go to management page</div>
                </> 
                : <>
                  <div> log in require</div>
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
