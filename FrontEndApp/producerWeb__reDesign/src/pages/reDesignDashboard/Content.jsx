// component
import OutTempLineChart from "./components/charts/OutTempLineChart"
import TempHeatmap from "./components/charts/TempHeatmap"
import PieChart from "./components/charts/PieChart"
import SmallInfoCardSection from "./components/SmallInfoCardSection"
import { useState } from "react"

// hooks
export default function Content({ selectedFarm, farmData, deviceData}) {
  const {humidityData, setHumidityData} = useState([])
  const { temperatureData, setTemperatureData } = useState([''])
  const {illuminanceData, setIlluminanceData} = useState([])
  
  farmData && farmData.length !== 0 ? (
    setHumidityData(farmData[selectedFarm].humidity),
    setTemperatureData(farmData[selectedFarm].temperatureCelsius),
    setIlluminanceData(farmData[selectedFarm].illuminance)
  ) : {}


  return (<>
    <div className={`w-full h-fit flex-col  ${farmData != 0 ? 'flex': 'hidden'}`}>
      <div className="text-6xl h-[80vh] w-full flex  justify-center items-center font-extrabold uppercase ">
        choose farm first
      </div>
    </div>
    {/* full */}
    <div className={`w-full h-fit flex-col ${farmData == 0 ? 'flex': 'hidden'}`}>
      {/* h-20vh */}
      <div  className="h-[20vh]">
        <SmallInfoCardSection/>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-12 w-full h-[40vh] ">
        <div className="col-span-4 p-4 pr-0">
          {/* wrapper */}
          <div className="w-full h-full bg-red-100 rounded-3xl flex flex-col">
            <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
              Outside Temperature
            </div>
            <OutTempLineChart/>
          </div>
        </div>

        <div className="col-span-8 p-4">
          {/* wrapper */}
          <div className="w-full h-full bg-indigo-50 rounded-3xl flex flex-col">
            <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
              Temperature
            </div>
            <TempHeatmap data={ temperatureData} />
          </div>
        </div>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-12 w-full h-[40vh] ">
        {/* span 8 */}
        <div className="col-span-8 py-2 px-4 ">
          {/* wrapper */}
          <div className="w-full h-full bg-yellow-100 rounded-3xl flex flex-col">
            <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
              <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
              Humidity      
            </div>
            </div>
            
          </div>
        </div>
        {/* span 4 */}
        <div className="col-span-4 py-2 pl-0 px-4">
          <div className="w-full h-full rounded-3xl bg-teal-600"><PieChart/></div>
        </div>
      </div>
      {/* grid row, 12, h-40vh */}
      <div className="grid grid-cols-3 w-full h-[40vh] ">
        {/* span 6 */}
        <div className="py-2 px-4 ">
          <div className="w-full h-full rounded-3xl bg-fuchsia-100">
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
