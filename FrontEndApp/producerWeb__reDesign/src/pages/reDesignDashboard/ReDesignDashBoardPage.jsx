// components
import Aside from "./components/Aside/Aside"
import Content from "./Content"
import FarmAside from "./components/FarmAside/FarmAside"
import PropertySelector from "./components/PropertySelector/PropertySelector";
// hooks
import { useEffect, useState } from "react";
import { selectClasses } from "@mui/material";
import AxiosApi from "../../api/AxiosApi";


export default function ReDesignDashBoardPage() {

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() { 
    try {
      const response = await AxiosApi.get('/home/data', );
      console.log('JSON.stringify(response)', JSON.stringify(response))
      console.log('response', response)
    } catch (error) {
      error.status === 500
        ? console.log(error.status)
        : {}
      console.error("데이터 가져오기 실패:", error);
    }
  }
  
  // useEffect(() => {
  //   fetchLatestData();
  // }, []);

  // async function fetchLatestData() { 
  //   try {
  //     const response = await AxiosApi.get('/device/lastest', );
  //     console.log('response', response)
  //   } catch (error) {
  //     error.status === 500
  //       ? console.log(error.status)
  //       : {}
  //     console.error("데이터 가져오기 실패:", error);
  //   }
  // }
  
  

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

  const [selectedFarm, setSelectedFarm] = useState();
  const [selectedProperty, setSelectedProperty] = useState()
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
              <FarmAside setSelectedFarm={setSelectedFarm}/>
            </div>
            {/* main content section, p-4, pl-0 */}
            <div className=" w-full h-full ">
            {/* main content */}
              <div className=" w-full h-full rounded-r-2xl overflow-x-clip overflow-y-auto scrollbar-hide">
                {/* property selector, 5vh */}
                <div className="w-full h-[4vh] py-2 border-b-8 box-content"> <PropertySelector setSelectedProperty={setSelectedProperty}/> </div>
                {/* content */}
                <Content />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>)
  }