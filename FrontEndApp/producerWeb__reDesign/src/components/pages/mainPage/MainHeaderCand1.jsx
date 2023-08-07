import { Link } from "react-router-dom"
export default function MainHeaderOne() {
  return (<>
    <header className="flex justify-center w-screen h-[12vh] ">
      <div className="flex  mt-auto w-[70%] h-[70%] ">
        <div className="flex flex-col items-center justify-center h-full w-fit ">
          <div className="flex items-end mt-auto text-3xl italic border-b-4 border-b-black h-fit">
            <div className="font-extrabold first-letter:text-5xl first-letter:not-italic">Futuristic</div> 
            <div className="font-extrabold first-letter:text-5xl first-letter:not-italic">Agriculture</div>
            <div className="font-extrabold first-letter:text-5xl first-letter:not-italic">Value</div>
          </div>
        </div>
        <div className="flex w-full ">
          <div className="flex w-full h-[70%]  mt-auto pb-1 border-b-4 border-b-black ">
            <div className="flex items-end justify-between mt-auto ml-auto italic w-fit h-fit">
              <div className="mx-4 font-bold text-gray-700 text-md">who are we</div>
              <div className="mx-4 font-bold text-gray-700 text-md">what we do</div>
              <div className="mx-4 font-bold text-gray-700 text-md">how we do</div>
            </div>
          </div>
          <div className="w-[20%]  h-full flex  items-end justify-end ml-auto border-b-black border-b-4">
            <div className="flex mb-1 bg-red-200 rounded-full w-fit">
                <Link  className="mx-2 my-1 font-extrabold border-none bg-none">
                  SIGN IN
              </Link>
            </div>
          </div> 
        </div>
        <div>
          
        </div>
      </div>
      
    </header>
</>)}