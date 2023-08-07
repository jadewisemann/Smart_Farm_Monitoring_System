// assets
// hooks
// component
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainHeaderOne from "./MainHeaderOne";
import MainHeaderOneModal from "./MainHeaderOneModal";
export default function MainPage() {
  return (<>
    <div className="flex flex-col items-center w-screen h-full">
      <div>
        <MainHeaderOne/>
      </div>
      <div>
        content
      </div>
      <div>
        footer
      </div>
  </div>
  </>)
}
