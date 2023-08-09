import { Avatar } from "@mui/material"
import { useState } from "react"


export default function ManagementHeader() {
  const userName = useState('John Doe')
  return (<>
  <header className=" flex justify-center w-screen  items-end h-full ">
    <div className="w-full mt-auto flex justify-between items-end px-[2%]"> {/* Header Container */}
      <div className="">{/* Logo Wrapper */}
        <div className="flex text-2xl italic font-extrabold h-fit w-fit mx-auto items-end"> {/* LOGO */}
          FAV: Monitoring
        </div>
      </div>
      <div className="flex w-[30vw] justify-between "> {/* right wrapper */}
        <div className="my-auto"> {/* alert wrapper */}
          <div>
            alert
          </div>
        </div>
        <div className="flex justify-end"> {/* avatar wrapper */}
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
