// components
import Aside from "./components/Aside/Aside"
import Content from "./Content"
import FarmAside from "./components/FarmAside/FarmAside"

// hooks
import { useEffect, useState } from "react";
import AxiosApi from "../../api/AxiosApi";


export default function ReDesignDashBoardPage() {
  // state
  const [farmList, setFarmList] = useState(['farm1','farm2','farm3'])
  const [deviveData, setDeviceData] = useState({})
  
  // fetch Users Farm Info
  useEffect(() => {
    fetchUserFarmInfo();
  }, []);

  async function fetchUserFarmInfo() { 
    try
    {
      const response = await AxiosApi.get('/home/data', );
      console.log('response', response)
      const farmSet = new Set(response.farmLabels)
      setFarmList([...farmSet])
      setDeviceData(response)
    }
    catch (error)
    {
      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("데이터 가져오기 실패:", error);
    }
  }

  const [selectedFarm, setSelectedFarm] = useState();

  // fetch Farm Data
  const [farmData, setFarmData] = useState([])

  const transformData = (inputArray) => {
    let tempFarmList = []
    var outputObj = {};
    inputArray.forEach(farm => {
      tempFarmList.push(farm.farmLabels)
      var farmObj = {};
      Object.keys(farm).forEach(key => {
        key !== 'farmLabels'
          ? farmObj[key] = farm[key] : {}
      });
    outputObj[farm.farmLabel] = farmObj;
    });
    setFarmData(outputObj)
  }

  useEffect(() => {
    fetchLatestData();
  }, []);

  async function fetchLatestData() { 
    try {
      const response = await AxiosApi.get('/device/lastest', );
      console.log('response', response)
      transformData(response)
      // [{farm: farm, humidity: [], }, ]
    } catch (error) {

      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("데이터 가져오기 실패:", error);
    }
  }
  farmData.length == 0
    ? setFarmData([
      {
        "farmLabels": "farm1",
        "humidity": [],
        "temperature": [],
        "illuminance": []
      }
    ]) : {}




  

  

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
    <div className=" flex flex-col  w-screen h-screen bg-teal-200">
      {/* top bar , 3vh */}
      <div className="w-screen h-[3vh]"> top bar</div>
      {/* bottom area */}
      <div className="flex w-screen h-[97vh] ">
        {/* aside, 5vw */}
        <div className="h-[97vh] w-[5vw] ">
          <Aside/>
        </div>
        {/* main */}
        <div className="flex h-[97vh] w-[95vw] p-4">
          {/* main wrapper */}
          <div className="flex w-full h-full border-8 box-border rounded-3xl ">
            {/* main-aside , 18vw */}
            <div className="h-full w-[18vw] border-r-8 box-border bg-teal-100 rounded-l-2xl overflow-x-clip overflow-y-auto scrollbar-hide">
              <FarmAside setSelectedFarm={setSelectedFarm} farmList={farmList}/>
            </div>
            {/* main content section, p-4, pl-0 */}
            <div className=" w-full h-full ">
            {/* main content */}
              <div className=" w-full h-full rounded-r-2xl overflow-x-clip overflow-y-auto scrollbar-hide">
                {/* content */}
                <Content selectedFarm={selectedFarm} farmData={farmData}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
  }