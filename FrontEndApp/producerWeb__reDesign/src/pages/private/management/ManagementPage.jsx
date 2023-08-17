import {  useState } from "react"
import FarmList from "./utils/listRendering/FarmList";
import PropertyList from "./utils/listRendering/PropertyList";
import ManagementContent from "./components/ManagementContent";
import {defaultFarm}  from "../../../test/testFarmData"

export default function ManagementPage() {

  function objectToArray(object) {
    const keyList = Object.keys(object);
    const result = keyList.map((farm) => {
      const farmData = { farm };
      for (const key in object[farm]) {
        farmData[key] = object[farm][key];
      }
      return farmData;
    });
    return result;
  }
  
  function getListOfProperty(farmDataList) {
    let listOfProperty = [];
    Object.entries(farmDataList[0]).map(([key, ]) => {
      key === 'farm'
        ? {}
        : listOfProperty = [...listOfProperty, key]
    })
    return listOfProperty
  }

  function getListOfFarm(farmDataList) {
    let listOfFarm = [];
    Object.entries(farmDataList).map(([,element]) => {
      Object.entries(element).map(([key, value]) => {
        key === 'farm'
          ? listOfFarm = [...listOfFarm, value]
          : {}
      })
    })
    return listOfFarm
  }


  const [farmDataList] = useState(objectToArray(defaultFarm));
  const [listOfFarm,] = useState(getListOfFarm(farmDataList));
  const [listOfProperty,] = useState(getListOfProperty(farmDataList));
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (<>
    {/* full page */}
    <div className=" flex  w-screen h-screen px-2 bg-teal-700">
      {/* aside area */}
      <div className=" w-[15vw] h-screen">
        {/* aside wrapper */}
        <div className=" h-[95%] my-4 mx-2 ">
          {/* logo section*/}
          <div className="h-[15%]  w-full rounded-lg bg-teal-500">
            <div className="flex text-2xl italic font-extrabold h-fit w-fit mx-auto items-end">FAV: Monitoring</div>
          </div>
          {/* farm list section */}
          <div className="w-full h-[calc(85%-8px)] mt-2 rounded-lg flex flex-col bg-teal-500 ">
            {/* header */}
            <div className="my-2 mx-auto text-lg font-bold flex justify-between items-center h-[5%] w-[90%]">
              <div className="">농장 목록</div> <button>+</button>
            </div>
            {/* farm list */}
            <div className="h-[calc(95%-16px)] w-[90%] mx-auto overflow-y-auto overflow-x-hidden scrollbar-hide">
              <FarmList listOfFarm={listOfFarm} setSelectedFarm={setSelectedFarm} />
            </div>
          </div>
        </div>
      </div>
      {/* content area */}
      <div className=" w-[85vw] h-screen" >
        {/* content wrapper */}
        <div className="h-[95%] my-4 rounded-lg flex flex-col items-center justify-center bg-teal-500">
          {/* header section */}
          <div className=" w-[95%] flex min-h-[8%] items-center justify-between">
            {/* navigation section */}
            <div className=" w-[4%]  flex justify-between">
              <button>◀</button> <button>▶</button>
            </div>
            {/* user section */}
            <div className=""> USER1 </div>
          </div>
          {/* content section */}
          <div className="h-[92%] w-[98%] bg-teal-400 mb-[1%] rounded-lg">
            {/* property selector */}
            <div className=" flex justify-start items-center h-[7%] "> 
              {/* property wrapper */}
              <div className="flex w-fit mx-2 justify-between  ">
                <PropertyList listOfProperty={listOfProperty} setSelectedProperty={setSelectedProperty} selectedFarm={selectedFarm} />
              </div>
            </div>
            {/* content section */}
            <div className="max-h-[93%] overflow-x-hidden overflow-y-auto scrollbar-hide p-2 ">
              <ManagementContent farmDataList={farmDataList} selectedFarm={selectedFarm} selectedProperty={selectedProperty} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
  }