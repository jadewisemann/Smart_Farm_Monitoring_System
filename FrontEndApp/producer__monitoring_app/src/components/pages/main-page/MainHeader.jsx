
export default function MainHeader() {
  return (<>
    <header className="flex flex-col items-center border-b-2 border-black bg-slate-100">
      <div className="flex items-center justify-between w-full">
        <div className="object-cover border-2 w-fit border-r-black">
          <div className="font-extrabold text-[100px] mt-[-12%] mb-[-8%] pr-2">FAV</div>
        </div>
        <div className="flex-1 mb-[-6px] md:mb-auto md:border-b-2 border-black">
          <div className="text-[38px] font-bold pl-2  text-center md:text-right pr-4">Smart Factory Monitoring</div>
        </div>
      </div>
    </header>
  </>)}