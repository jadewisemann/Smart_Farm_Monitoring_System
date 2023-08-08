import { Avatar } from "@mui/material"
import { useState } from "react"


export default function ManagementHeader() {
  const userName = useState('John Doe')
  return (<>
  <header className=" flex justify-center w-screen h-fit mt-[2vw]   ">
    <div className="w-full mt-auto flex justify-between bg-red-600 px-[2%]"> {/* Header Container */}
      <div className="">{/* Logo Wrapper */}
        <div className="flex mt-auto text-2xl italic font-extrabold h-fit w-fit mx-auto items-end"> {/* LOGO */}
          FAV: Monitoring
        </div>
      </div>
      <div className="flex w-[30vw] justify-between "> {/* right wrapper */}
        <div className="bg-fuchsia-500 my-auto"> {/* alert wrapper */}
          <div>
            alert
          </div>
        </div>
        <div className="flex justify-end bg-fuchsia-200"> {/* avatar wrapper */}
          <div className="my-auto mx-4 text-md font-medium">
            {userName}
          </div>
          <div>
            <Avatar/>
          </div>
        </div>
      </div>
    </div>  
  </header>
  </>)
}
