import { Link } from "react-router-dom"

export default function MainHeader() {
  return (<>
    <header className="flex flex-col justify-center w-screen h-[10vh] md:h-[10vh] min-w-max  ">
      <div className=" w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row  
      "> {/* wrapper */}
        <div className="
        flex mt-auto text-3xl md:text-2xl italic font-extrabold h-[6vh] md:h-fit w-fit mx-auto mb-0
        border-b-2 border-b-black items-end
         "> {/* LOGO */}
          <div className="">Futuristic</div> 
          <div className="">Agriculture</div>
          <div className="">Value</div>
        </div>
        <div className="flex w-full  items-center justify-center "> {/* menu */}
          <div className="md:ml-auto min-w-md w-[80%] md:w-fit justify-center
          flex text-md font-bold
          "> {/* menu wrapper */}
            <div className="mr-8 md:ml-4">items</div>
            <div className="mx-8 ">items</div>
            <div className="mx-8 ">items</div> 
            <div className="ml-8 inline md:hidden">log in</div>
          </div>
          <div className="ml-4 hidden md:inline"> {/* login wrapper */}
            <div className="mx-2 font-bold text-md md:text-xl whitespace-nowrap overflow-clip">
              <Link to="/signin">
                sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
</>)}