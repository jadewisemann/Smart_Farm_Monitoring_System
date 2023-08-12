import { Link } from "react-router-dom"

export default function MainHeader() {
  return (<>
    <header className="flex flex-col justify-center w-screen h-[10vh]  min-w-max "> {/* header section, full width */}
      <div className=" md:max-w-[1140px] w-[90%] md:w-[80%] mx-auto flex flex-col md:flex-row"> {/* wrapper, set size*/}
        <div className=" flex mt-auto text-3xl italic font-extrabold h-[5vh] md:h-fit w-fit mx-auto mb-0 border-b-2 border-b-black items-end"> {/* LOGO */}
          <div className="">Futuristic</div> 
          <div className="">Agriculture</div>
          <div className="">Value</div>
        </div>
        <div className="flex w-full  items-center justify-center font-worksans "> {/* menu */}
          <div className="md:ml-auto min-w-md w-[80%] md:w-fit justify-center
          flex text-md font-bold
          "> {/* menu wrapper */}
            <div className="mr-4 lg:mr-8 md:ml-4">items</div>
            <div className="mx-4 lg:mx-8 ">items</div>
            <div className="mx-4 lg:mx-8 ">items</div> 
            <div className="ml-4 lg:ml-8 inline md:hidden">log in</div>
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