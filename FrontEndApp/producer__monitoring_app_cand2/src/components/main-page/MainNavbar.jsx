import classNames from "classnames";
import {useState}  from "react";

export default function MainNavbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <nav className=" main-nav bg-gray-400">
        <div className=" main-nav-responsive-container max-w-3xl mx-auto px-3 bg-yellow-500 ">
          <div className="main-nav-container flex justify-between">
            <div className="main-nav-left-section flex space-x-4">
              <div className="nav-item flex items-center space-x-1">
                <a
                  href="#"
                  className=" py-5 px-2 text-gray-700">
                  <span className=" font-bold">FAV</span>
                </a>
              </div>
              <div className="nav-item hidden sm:flex items-center space-x-1">
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <span className=" font-bold">About Us</span>
                </a>
                <a
                  href="#"
                  className="py-5 px-3 text-gray-700 hover:text-gray-900">
                  <span className=" font-bold">Contact</span>
                </a>
              </div>
            </div>
            <div className="main-nav-right-section flex space-x-1">
              <div className=" hidden sm:flex">
                <a href="#" className="nav-item py-5 px-3">Log In</a>
                <a href="#"
                  className="flex items-center nav-item  px-3 my-4 bg-yellow-400 hover:bg-yellow-300
                text-yellow-900 hover:text-yellow-900 rounded-lg transition duration-300">
                  Sign up
                </a>
              </div>
              <div className="sm:hidden flex items-center ">
                <button onClick={() => {
                  setMenuToggle(!menuToggle)
                }}>
                  {menuToggle
                    ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>)
                    : (<svg xmlns = "http://www.w3.org/2000/svg" fill = "none" viewBox = "0 0 24 24" strokeWidth = { 1.5 } stroke = "currentColor" className = "w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>)}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames("md:hidden", { hidden: !menuToggle })}> 
          <div className=" bg-slate-100">
            <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
              <span className=" hover:text-yellow-500">About Us</span>
            </a>
            <div className="flex justify-between hover:bg-gray-200">
              <a href="#" className="block py-2 px-4 text-sm ">
                <span className=" hover:text-yellow-500">Contact</span>
              </a>
              <div className="flex justify-end py-2 px-4 text-sm hover:bg-gray-200">
                  <a href="#" className=" mx-4  hover:text-yellow-500">Log In</a>
                  <a href="#"
                    className=" mx-4 hover:text-gray-50 ">
                    Sign up
                  </a>e
              </div>
            </div>
          </div>
      </div>
      </nav>
    </>
  );
}