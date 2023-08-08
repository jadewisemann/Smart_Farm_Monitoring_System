import SignUpInsidePage from "../../feature/signup/SignUpInsidePage";
import { Route, Routes } from "react-router-dom";

export default function SignUpPage() {
  return (<>
    <div className="w-[80vw] h-[80vh]  flex items-center"> {/* Content Section */}
      <div className="w-full lg:w-[50%] h-full flex flex-col items-center border-2 border-black justify-center px-8" > {/* half page */}
        <SignUpInsidePage />
      </div>
      <div className="hidden lg:flex border-black border-2 border-l-0 w-[50%] h-full">
      </div>
    </div>
  </>)
}
