import classNames from "classnames";
import {useState}  from "react";

export default function MainNavbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return ( <>
    <div className=" z-1 max-w-screen bg-teal-400 rounded-t-3xl">
      <header className="flex justify-between">
        <div className="flex space-x-4 pl-8">
          <div>
            <a href="">asd</a>
          </div>
        </div>
        </header>
      </div>
      
  </> );
}