import TitleCard from "./components/cards/TitleCard"
export default function Content() {
  return (<>
    {/* full */}
    <div className="w-full h-fit flex flex-col ">
      {/* column 1, h-40vh */}
      <div className="flex w-full h-[40vh] ">
        {/* row 1.1, 33%*/}
        <div className="w-[33%] bg-red-50 p-4">
            <TitleCard/>
        </div>
        {/* row 1.2, ~  */}
        <div className="flex-1 p-4">
          {/* wrapper */}
          <div className="w-full h-full bg-red-300 rounded-3xl">
          </div>
        </div>
      </div>
  </div>
  </>)
}
