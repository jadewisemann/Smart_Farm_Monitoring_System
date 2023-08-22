// components
import Aside from "./components/Aside/Aside"
import Content from "./Content"
import FarmAside from "./components/FarmAside/FarmAside"

// hooks
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosApi";

// dummy data
import { dummyDeviceData, dummyFarmData } from "./dummyData";

export default function ReDesignDashBoardPage() {
  // state
  const [farmList, setFarmList] = useState([])
  const [deviceData, setDeviceData] = useState()

  // const [deviceData, setDeviceData] = useState()
  const [selectedFarm, setSelectedFarm] = useState();
  const [farmData, setFarmData] = useState([])
  const defDeviceData = [dummyFarmData]
  const defFarmData = dummyDeviceData
  // fetch Mac and Farm Info
  useEffect(() => {
    fetchDeviceData();
  }, []);

  async function fetchDeviceData() { 
    // get data = [  {  "farmLabels": ["string"], "macAddresses": ["string"]  },  ]
    try{
      const response = await AxiosApi.get('/home/data', );
      const farmSet = new Set(response.data[0].farmLabels)
      setFarmList([...farmSet])
      setDeviceData(response.data)
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      const farmSet = new Set(defDeviceData[0].farmLabels)
      setFarmList([...farmSet])
      setDeviceData(defDeviceData)
    }
  }

  // fetch latest Data
  useEffect(() => {
    fetchLatestData();
  }, []);
  async function fetchLatestData() { 
    try {
      const response = await AxiosApi.get('/device/lastest', );
      setFarmData(response.data)
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setFarmData(defFarmData)
    }
  }

  


  return (<>
  {/* rounded:2xl, ref: slack */}
    {/* full page */}
    <div className=" flex flex-col  w-screen h-screen bg-neutral-200">
      {/* top bar , 3vh */}
      <div className="w-screen h-[3vh]"></div>
      {/* bottom area */}
      <div className="flex w-screen h-[97vh] ">
        {/* aside, 5vw */}
        <div className="h-[97vh] w-[5vw] ">
          <Aside/>
        </div>
        {/* main */}
        <div className="flex h-[97vh] w-[95vw] p-4">
          {/* main wrapper */}
          <div className="flex w-full h-full box-border rounded-3xl ">
            {/* main-aside , 18vw */}
            <div className="h-full w-[18vw] border-r-8 box-border bg-neutral-50 rounded-3xl overflow-x-clip overflow-y-auto scrollbar-hide">
              <FarmAside setSelectedFarm={setSelectedFarm} farmList={farmList}/>
            </div>
            {/* main content section, p-4, pl-0 */}
            <div className=" w-full h-full  bg-neutral-50 rounded-3xl">
            {/* main content */}
              <div className=" w-full h-full rounded-r-2xl overflow-x-clip overflow-y-auto scrollbar-hide">
                {/* content */}
                <Content selectedFarm={selectedFarm} farmData={farmData} deviceData={deviceData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
  }