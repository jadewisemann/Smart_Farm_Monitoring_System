import { useState } from "react"
import MainHeader from "./components/main-page/MainHeader"
import LoginRequire from "./components/main-page/LoginRequire"
import GoManagementPage from "./components/main-page/GoManagementPage"
function App() {
  const [isLoggedIn, setIsLogggedIn] = useState(false)
  return (
    <>
      <MainHeader />
      <div>
        {isLoggedIn
          ? <GoManagementPage/>
          : <LoginRequire />
        }
      </div>
      
    </>
  )
}

export default App
