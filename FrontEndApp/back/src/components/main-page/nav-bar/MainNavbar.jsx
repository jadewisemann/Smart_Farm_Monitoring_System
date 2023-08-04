import NavBreadCrumble from "./NavBreadCrumble"
import UserAvatar from "./UserAvatar"

export default function MainNavbar() {
  return (<>
    <header className="flex flex-col items-center border-b-2 border-black bg-slate-100">
      <div className="flex items-center justify-between w-full">
        <div className="object-cover border-2 w-fit border-r-black">
          <div className="font-extrabold text-[100px] mt-[-12%] mb-[-8%] pr-2">FAV</div>
        </div>
        <div className="flex flex-col self-stretch flex-1 ">
          <div className="flex-1 border-black md:mb-auto md:border-b-2">
            <p className="text-[38px] font-bold pl-2  text-center md:text-right pr-4">Smart Factory Monitoring</p>
          </div>
          <div className="flex-1 md:block">
            <nav className="items-center justify-between hidden h-full bg-red-200 md:flex ">
              <div className="hidden md:flex">
              <NavBreadCrumble />
              </div>
              <div className="justify-center hidden h-full px-4 md:flex" >
                <UserAvatar/>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex justify-between w-full py-1 border-t-2 border-black md:hidden">
        <div>
          <NavBreadCrumble />
        </div>
        <div className="mr-4 ">
          <UserAvatar size="2xl" />
        </div>
      </div>
    </header>
  </>)}