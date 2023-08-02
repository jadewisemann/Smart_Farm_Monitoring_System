import MainNavbar from "../../main-page/MainNavbar";

export default function MangedPage() {
  return ( <>
    <div className="flex-1 flex items-center justify-center mx-0 md:mx-auto max-w-3xl md:max-w-[80%] ">
      <div className="flex flex-col items-center min-w-[90%] min-h-[90%]  bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-100 to-teal-100 ">        
          <MainNavbar/> 
          <div className="flex flex-col items-center w-[80%] h-[80%] mt-[9%] min-w-sm">
            <div> MangedPage</div>
          </div>
      </div>
    </div>
</>)}
