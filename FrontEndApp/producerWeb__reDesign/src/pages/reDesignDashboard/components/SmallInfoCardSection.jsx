import CurrentDateTime from "../../../components/CurrentDateTime"
import WeatherCard from "./cards/WeatherCard"
export default function SmallInfoCardSection() {
  const smallInfoList = [
    ['title1', 'value1'],
    ['title2', 'value2'],
    ['Revenue', 'value3'],
    ['', 'No notification'],

  ]
  return (<> 
    <div className={`grid grid-cols-5 w-full h-full`}>
      {/* card1 */}
      <div className="px-4 py-2 pt-4">
        <div className="w-full h-full rounded-3xl flex flex-col items-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-red-200 via-red-300 to-yellow-200">
          <CurrentDateTime/>
        </div>
      </div>
      {/* card 2  */}
      <div className="px-4 py-2 pt-4">
        <div className="w-full h-full bg-blue-300 rounded-3xl flex flex-col items-start  px-4 pt-2">
            <div className="text-sm font-semibold">Monthly Revenue</div>
          <div className="text-2xl font-bold mt-4">19,400,000
            <span className="ml-2 text-sm font-semibold">KRW</span>
          </div>
          <div>
            + 20.1% from last month
          </div>
        </div>
      </div>
      {/* card 2  */}
      <div className="px-4 py-2 pt-4">
        <div className="w-full h-full bg-pink-300 rounded-3xl flex flex-col items-center">
          <WeatherCard/>
        </div>
      </div>
      {/* card 2  */}
      <div className="px-4 py-2 pt-4">
        <div className="w-full h-full bg-blue-300 rounded-3xl flex flex-col items-center  px-4 pt-2">
          <div className="text-2xl font-bold mt-4 italic text-center">
            Weekly Overview
          </div>
            <div className="text-sm font-semibold ">Click to See More</div>
        </div>
      </div>
      {/* card 2  */}
      <div className="px-4 py-2 pt-4">
        <div className="w-full h-full bg-neutral-300 rounded-3xl flex flex-col items-center justify-center">
          <div className="text-xl font-medium">No notification</div>
        </div>
      </div>
    </div>
  </>)
}
