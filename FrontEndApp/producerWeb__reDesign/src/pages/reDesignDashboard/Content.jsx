// component
import TitleCard from "./components/cards/TitleCard"
import LineChart from "./components/charts/LineChart"
import Heatmap from "./components/charts/Heatmap"
import PieChart from "./components/charts/PieChart"
import SmallInfoCardSection from "./components/SmallInfoCardSection"
import WeatherCard from "./components/cards/WeatherCard"
import CalendarCard from "./components/cards/CalendarCard"

// hooks
export default function Content() {
  return (<>
    {/* full */}
    <div className="w-full h-fit flex flex-col ">
      {/* h-20vh */}
      <div  className="h-[20vh]">
        <SmallInfoCardSection/>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-12 w-full h-[40vh] ">
        {/* span 4 */}
        <div className="col-span-4 p-4"><TitleCard/></div>
        {/* span 8 */}
        <div className="col-span-8 p-4 pl-2">
          {/* wrapper */}
          <div className="w-full h-full bg-yellow-100 rounded-3xl"><LineChart/></div>
        </div>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-12 w-full h-[40vh] ">
        {/* span 8 */}
        <div className="col-span-8 py-2 px-4 ">
          <div className="w-full h-full rounded-3xl bg-red-300"><Heatmap/></div>
        </div>
        {/* span 4 */}
        <div className="col-span-4 py-2 px-4">
          <div className="w-full h-full rounded-3xl bg-teal-600"><PieChart/></div>
        </div>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-3 w-full h-[40vh] ">
        {/* span 6 */}
        <div className="py-2 px-4 ">
          <div className="w-full h-full rounded-3xl bg-fuchsia-100">
            <WeatherCard/>
          </div>
        </div>
        {/* span 6 */}
        <div className="py-2 px-4 ">
          <div className="w-full h-full rounded-3xl bg-blue-50">
          </div>
        </div>
      </div>
  </div>
  </>)
}
