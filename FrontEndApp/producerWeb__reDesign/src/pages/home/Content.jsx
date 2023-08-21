import { Link } from "react-router-dom";

export default function Content() {
    const page1styles = {
    backgroundColor: 'rgb(134, 239, 172)',
    backgroundImage: 'radial-gradient(at 99% 67%, rgb(245, 245, 244) 0, transparent 78%), radial-gradient(at 96% 45%, rgb(167, 139, 250) 0, transparent 100%), radial-gradient(at 57% 74%, rgb(68, 64, 60) 0, transparent 0%), radial-gradient(at 100% 35%, rgb(22, 78, 99) 0, transparent 4%), radial-gradient(at 75% 1%, rgb(22, 163, 74) 0, transparent 100%), radial-gradient(at 43% 48%, rgb(82, 82, 82) 0, transparent 0%)',

  };
  return (<>
    {/* Content full page, w full h fit */}
    <div className="flex flex-col justify-center items-center w-full h-fit" style={page1styles}>
      {/* page 1 */}
        <div className=" h-[100vh] flex flex-col items-center justify-center w-[80vw]">
          <div className="text-[180px] text-center leading-none tracking-normal font-worksans font-black">
            <span className="tracking-wide">Future&nbsp;&nbsp;&nbsp;of</span>  <br/>
            Agriculture <br />
            Start &nbsp;&nbsp;here
          </div>
        </div>
        {/* page 2 */}
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <div className="text-[140px] text-center leading-none tracking-normal font-worksans font-black ">
            <span className="text-[100px]">The &nbsp;</span> <br />
            <span className="italic text-[160px] mr-4">Easiest</span> way <br />
            <span className="text-[120px]">to</span > <span className="text-[160px] uppercase">monitor</span> <br />
            <span className="text-[140px]">your farm</span>
          </div>
        </div>
        {/* page 3 */}
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <div className="text-[180px] ml-56 leading-none tracking-normal font-worksans font-black ">
          <span className="text-[140px] italic">less </span> Energy <br />
          <span className="text-[140px] italic">less </span> Effort <br />
          <span className="text-[140px] italic">less </span>  Pollution
          </div>
        </div>
       {/* page 4 */}
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <div className="text-[140px] text-center leading-none tracking-normal font-worksans font-black ">
          <span className="text-[220px] uppercase leading-3">boost</span>
          <br />
          <span className="tracking-widest text-[100px] uppercase">your</span>
          <br />
          <span className="text-[160px] uppercase">efficiency</span>
          <br />
          <span className="text-[100px]">with &nbsp;</span>
          <span className="uppercase italic text-[160px]">us</span>
          </div>
        </div>
      {/* page 5 */}
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <div className="text-[180px] text-center leading-none tracking-normal font-worksans font-black ">
          The most <br />
          intelligent <br />
          way to farm <br />
          </div>
        </div>
      {/* page 6 */}
        <div className="h-[100vh] flex flex-col items-center justify-center">
          <div className="text-[260px] text-center leading-none tracking-normal font-worksans font-black ">
          FAV
          
        </div>
        
        <div className="text-4xl uppercase italic mt-16 mb-[-64px] font-extrabold py-4 px-8  border-4 border-gray-500">
          <Link to="/signin">Click here to start</Link>
        </div>
        </div>
      </div>
  </>)
}
