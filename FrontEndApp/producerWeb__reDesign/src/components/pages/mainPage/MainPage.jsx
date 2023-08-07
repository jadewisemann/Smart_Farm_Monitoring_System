// assets
// hooks
// component
import { Route, Routes } from "react-router-dom";
import MainHeader from "./MainHeader";
import MainHeaderOne from "./MainHeaderCand1";
import MainHeaderOneModal from "./MainHeaderCand1withModal";
export default function MainPage() {
  return (<>
    <div className="flex flex-col items-center w-screen h-full">
      <div>
        <MainHeaderOneModal/>
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
