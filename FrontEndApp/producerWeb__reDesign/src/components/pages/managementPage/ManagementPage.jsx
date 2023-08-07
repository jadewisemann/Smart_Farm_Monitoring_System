import MainNavbar from "../../main-navbar/MainNavbar";

export default function ManagementPage() {
  return ( <>
    <div className="flex-1 flex items-center justify-center mx-2 md:mx-auto max-w-[90rem] ">
      <div className="flex flex-col min-w-[90%] min-h-[90%]  border-black border-2 bg-purple-200">   
        <MainNavbar />
        <div className="flex flex-1 w-full my-auto bg-slate-200"  >
        </div>
      </div>
    </div>
</>)}