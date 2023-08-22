// components
import Aside from "./components/Aside/Aside"
import Content from "./Content"
import FarmAside from "./components/FarmAside/FarmAside"

// hooks
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosApi";


export default function ReDesignDashBoardPage() {
  // state
  const [farmList, setFarmList] = useState(['apple','banana','pear','peach','Guava','Melon','water melon','farm2','farm3'])
  const [deviceData, setDeviceData] = useState({})
  const [selectedFarm, setSelectedFarm] = useState();
  console.log('selectedFarm,', selectedFarm,)
  const [farmData, setFarmData] = useState([])
  
  

  // fetch Mac and Farm Info
  useEffect(() => {
    fetchDeviceData();
  }, []);

  async function fetchDeviceData() { 
    // get data = [  {  "farmLabels": ["string"], "macAddresses": ["string"]  },  ]
    try{
      const response = await AxiosApi.get('/home/data', );
      const farmSet = new Set(response.data.farmLabels)
      setFarmList([...farmSet])
      setDeviceData(response.data)
    } catch (error) {
      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("데이터 가져오기 실패:", error);
    }
  }

  // fetch latest Data
  function processData(array) {
    const result = {};
    array.forEach(object => {
      const { dataId, macAddress, temperatureCelsius, humidity, illuminance, recordedAt } = object;
      result[macAddress] = {
        temperatureCelsius,
        humidity,
        illuminance,
        recordedAt
      };
    });
    return result;
  }
  useEffect(() => {
    fetchLatestData();
  }, []);
  async function fetchLatestData() { 
    // [
    //   {
    //     "dataId": 0,
    //     "macAddress": "string",
    //     "temperatureCelsius": 0,
    //     "humidity": 0,
    //     "illuminance": 0,
    //     "recordedAt": "2023-08-22T06:53:52.218Z"
    //   } , ...
    // ]
    try {
      const response = await AxiosApi.get('/device/lastest', );
      setFarmData(processData(response.data))
    } catch (error) {
      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("데이터 가져오기 실패:", error);
    }
  }

  // const deviceInfo = {
  //   "farmLabels": ["사과"],
  //   "macAddresses": ["d8:3a:dd:27:ec:e0"]  
  // }
  // useEffect(() => {
  //   addDevice();
  // }, []);

  // async function addDevice() {
  //   try {
  //     const response = await AxiosApi.post('/home/device', deviceInfo);
  //     console.log('response', response)
  //   } catch (error) {
  //     error.status === 500
  //       ? console.log(error.status)
  //       :{}
  //     console.error("데이터 가져오기 실패:", error);
  //   }
  // }



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