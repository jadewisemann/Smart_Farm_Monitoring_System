import { Link } from "react-router-dom"
export default function MainHeader() {
  return (<>
    <header className="flex   justify-center w-screen h-[12vh] ">
      <div className="flex mt-auto mb-1  w-[70%] h-[70%] ">
        <div className="flex flex-col items-center justify-center h-full w-[20%]  ">
          <div className="text-4xl font-extrabold ">FAV</div>
        </div>
        <div className="flex   justify-between w-full h-full px-[5%]">
          <div className="flex items-center justify-between h-full mx-auto">
            <div className="mx-4 font-bold text-gray-700 text-md">who are we</div>
            <div className="mx-4 font-bold text-gray-700 text-md">what we do</div>
            <div className="mx-4 font-bold text-gray-700 text-md">how we do</div>
          </div>
        </div>
        <div className="w-[20%] h-full flex flex-col items-center justify-center ml-auto">
          <div className="flex items-center justify-center w-24 h-10 mt-2 bg-yellow-400 rounded-full">
              <Link  className="font-extrabold">
                SIGN IN
            </Link>
          </div>
        </div> 
      </div>
    </header>
</>)}