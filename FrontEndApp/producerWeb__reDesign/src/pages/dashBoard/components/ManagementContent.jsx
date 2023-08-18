import { Heatmap } from "./Heatmap";
import { CalendarHeatmap } from "./CalendarHeatmap";
import StackedAreaChart from "./StackedAreaChart";
export default function ManagementContent({ farmDataList, selectedFarm, selectedProperty }) {

  const selectedFarmData = farmDataList.find(farmData => farmData['farm'] === selectedFarm);

  const setOfData = selectedFarmData && selectedProperty ? selectedFarmData[selectedProperty].map((data, index) => (
    <div key={index} className="m-1 w-16 h-16 bg-teal-300 rounded-lg items-center flex justify-center">
      {data}
    </div>
  )) : null;

  return (
    <>
      <div className="flex flex-wrap justify-start ">
        {setOfData}
        <div className="w-[100%] h-[146px]">
          <StackedAreaChart />
          
        </div>
        <div className="w-[1000px] h-[1000px]  bg-red-50">
          <Heatmap/>
        </div  >
        <div className="w-[1000px] h-[1000px]  bg-red-50">
          <CalendarHeatmap/>
        </div>
      </div>
    </>
  );
}
