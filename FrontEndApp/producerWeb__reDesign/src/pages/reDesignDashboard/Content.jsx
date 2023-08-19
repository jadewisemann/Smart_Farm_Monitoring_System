import TitleCard from "./components/cards/TitleCard"
import LineChart from "./components/charts/LineChart"

export default function Content() {
  return (<>
    {/* full */}
    <div className="w-full h-fit flex flex-col ">
      {/* column 1, h-40vh */}
      <div className="flex w-full h-[40vh] ">
        {/* row 1.1, 33%*/}
        <div className="w-[33%]  p-4">
            <TitleCard/>
        </div>
        {/* row 1.2, ~  */}
        <div className="flex-1 p-4">
          {/* wrapper */}
          <div className="w-full h-full bg-yellow-100 rounded-3xl">
            <LineChart/>
          </div>
        </div>
      </div>
  </div>
  </>)
}
