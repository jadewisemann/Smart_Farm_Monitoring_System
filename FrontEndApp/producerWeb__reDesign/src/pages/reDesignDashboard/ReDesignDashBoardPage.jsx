// components
import Aside from "./components/Aside/Aside"
import Content from "./Content"
import FarmAside from "./components/FarmAside/FarmAside"
export default function ReDesignDashBoardPage() {
  return (<>
  {/* rounded:2xl, ref: slack */}
    {/* full page */}
    <div className=" flex flex-col  w-screen h-screen bg-teal-200">
      {/* top bar , 3vh */}
      <div className="w-screen h-[3vh]"> top bar</div>
      {/* bottom area */}
      <div className="flex w-screen h-full ">
        {/* aside, 5vw */}
        <div className="h-full w-[5vw] ">
          <Aside/>
        </div>
        {/* main */}
        <div className="flex h-full w-full p-4">
          {/* main wrapper */}
          <div className="flex w-full h-full border-8 box-border rounded-3xl ">
            {/* main-aside , 18vw */}
            <div className="h-full w-[18vw] border-r-8 box-border bg-teal-100 rounded-l-2xl">
              <FarmAside/>
            </div>
            {/* main content section, p-4, pl-0 */}
            <div className=" w-full h-full ">
              {/* main content */}
              <div className=" w-full h-full rounded-2xl overflow-x-clip overflow-y-auto">
                <Content/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
  }