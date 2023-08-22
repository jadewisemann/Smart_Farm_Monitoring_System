// component
import OutTempLineChart from "./components/charts/OutTempLineChart"
import TempHeatmap from "./components/charts/TempHeatmap"
import HumdHeatmap from "./components/charts/HumdHeatmap"
import IlumHeatmap from "./components/charts/IlumHeatmap"
import PieChart from "./components/charts/PieChart"
import SmallInfoCardSection from "./components/SmallInfoCardSection"
// hooks
import { useState,useEffect } from "react"

export default function Content({ selectedFarm, farmData, deviceData }) {

  function getDataByFarm(selectedFarm, farmData, deviceData) {
  // selectedFarm과 일치하는 farmLabels 인덱스 찾기
    const farmObj = deviceData.filter(farm => farm && farm.farmLabels && farm.farmLabels.includes(selectedFarm));
    if (farmObj.length === 0) {
      return {
        temperatureCelsius: [],
        humidity: [],
        illuminance: [],
        recordedAt: []
      };
    }
  const selectedMacs = farmObj.flatMap(farm => {
    const indices = farm.farmLabels.reduce((acc, label, idx) => {
      if (label === selectedFarm) {
        acc.push(idx);
      }
      return acc;
    }, []);
    return indices.map(idx => farm.macAddresses[idx]);
  });
    const filteredDeviceData = farmData.filter(device => selectedMacs.includes(device.macAddress));
    const result = {
      temperatureCelsius: [],
      humidity: [],
      illuminance: [],
      recordedAt: []
    };
    filteredDeviceData.forEach(device => {
      result.temperatureCelsius.push(device.temperatureCelsius);
      result.humidity.push(device.humidity);
      result.illuminance.push(device.illuminance);
      result.recordedAt.push(device.recordedAt);
    });
    return result;
  }
  function convertArray(arr) {
  const result = [];
  for (let i = 0, id = 1; i < arr.length; i += 10, id++) {
    const data = [];
    for (let j = 0; j < 10 && (i + j) < arr.length; j++) {
      data.push({
        x: j + 1,
        y: arr[i + j]
      });
    }
    result.push({
      id,
      data
    });
  }

  return result;
  }

const [humidityData, setHumidityData] = useState([]);
const [temperatureData, setTemperatureData] = useState([]); 
const [illuminanceData, setIlluminanceData] = useState([]);

useEffect(() => {
  if (!selectedFarm) return; // Add this line to skip execution when selectedFarm is undefined or empty
  const result = getDataByFarm(selectedFarm, farmData, deviceData);
  setHumidityData(result.humidity);
  setTemperatureData(result.temperatureCelsius);
  setIlluminanceData(result.illuminance);
}, [selectedFarm]);


  return (
    <>
      <div className={`w-full h-fit flex-col  ${!selectedFarm ? 'flex': 'hidden'}`}>
        <div className="text-6xl h-[80vh] w-full flex  justify-center items-center font-extrabold uppercase ">
          choose farm first
        </div>
      </div>
      {/* full */}
      <div className={`w-full h-fit flex-col ${selectedFarm ? 'flex': 'hidden'}`}>
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
              <TempHeatmap data={convertArray(temperatureData)} />
            </div>
          </div>
        </div>
       {/* grid row, 12, h-40vh */}
        <div className="grid grid-cols-12 w-full h-[40vh] ">
          <div className="col-span-6 p-4">
            {/* wrapper */}
            <div className="w-full h-full bg-cyan-100 rounded-3xl flex flex-col">
              <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
                Humidity
              </div>
              <HumdHeatmap data={convertArray(humidityData) } />
            </div>
          </div>
          <div className="col-span-6 p-4">
            {/* wrapper */}
            <div className="w-full h-full bg-fuchsia-100 rounded-3xl flex flex-col">
              <div className="w-full h-fit text-2xl font-extrabold mt-4 ml-4 ">
                Illuminance
              </div>
              <IlumHeatmap data={convertArray(illuminanceData)} />
            </div>
          </div>
        </div>
        
        {/* grid row, 3, h-40vh */}
        <div className="grid grid-cols-3 w-full h-[40vh] ">
          {/* span 1 */}
          <div className="py-2 px-4 col-span-1">
            <div className="w-full h-full rounded-3xl bg-blue-50">
              <PieChart/>
            </div>
          </div>
          {/* span 2 */}

        </div>
    </div>
  </>
  )
}
