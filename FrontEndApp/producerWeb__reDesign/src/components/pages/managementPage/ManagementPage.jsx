import { useEffect, useState } from "react"
import FarmList from "../../feature/farmRendering/FarmList";

import ManagementContent from "./ManagementContent";
import PropertyList from "../../feature/farmRendering/PropertyList";
export default function ManagementPage() {
  const fetchFarms = async () => {
    // const data = 
  // setFarms(data);
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  const defaultFarm = {
    "farm1": {
      "temperature": [53.74, 65.22, 96.29, 27.67, 31.87, 3.53, 56.03, 79.31, 28.51, 12.24, 68.51, 91.34, 47.13, 69.24, 87.62, 44.59, 45.53, 65.73, 84.97, 54.68],
      "humidity": [97.85, 92.08, 10.74, 94.86, 70.29, 82.49, 71.93, 52.12, 49.24, 26.02, 61.88, 30.03, 22.71, 68.35, 4.48, 58.39, 53.39, 45.9, 91.2, 54.94],
      "iluminesense": [99.44, 72.11, 20.76, 75.65, 43.37, 91.1, 14.93, 88.37, 12.5, 91.04, 9.92, 27.11, 79.29, 61.47, 74.37, 93.28, 60.64, 51.23, 43.76, 64.16],
      "ilness": [43.99, 83.8, 46.65, 54.12, 96.58, 60.9, 62.42, 32.35, 22.23, 50.16, 28.23, 4.96, 81.17, 56.89, 90.16, 89.97, 63.88, 55.95, 52.61, 54.04]
    },
    "farm2": {
      "temperature": [59.29, 19.24, 62.92, 78.71, 88.4, 53.6, 91.91, 85.77, 10.74, 18.45, 2.0, 18.62, 44.77, 80.65, 18.46, 33.28, 92.32, 53.09, 47.66, 34.04],
      "humidity": [94.9, 60.58, 2.73, 20.91, 15.19, 52.87, 76.98, 96.13, 73.47, 40.98, 84.57, 50.46, 48.04, 30.63, 42.52, 81.8, 93.27, 53.23, 95.47, 30.97],
      "iluminesense": [53.72, 16.84, 12.72, 15.28, 97.91, 68.26, 38.61, 31.41, 7.04, 44.44, 88.66, 17.58, 37.06, 76.43, 34.5, 95.45, 1.84, 75.26, 70.26, 60.08],
      "ilness": [61.4, 22.61, 85.97, 14.05, 40.42, 40.32, 27.16, 45.11, 26.74, 41.74, 65.45, 12.02, 98.97, 26.39, 50.94, 58.25, 47.15, 14.84, 85.32, 46.11]
    },
    "farm3": {
      "temperature": [51.7, 99.81, 69.14, 92.7, 92.04, 76.22, 72.72, 18.61, 75.9, 45.43, 76.89, 7.86, 90.63, 21.15, 26.69, 37.47, 46.47, 15.98, 28.43, 77.44],
      "humidity": [84.17, 86.15, 30.11, 97.86, 18.93, 70.12, 39.58, 50.83, 10.25, 52.56, 94.33, 32.4, 57.11, 58.75, 32.79, 84.51, 24.97, 29.39, 55.32, 51.48],
      "iluminesense": [12.64, 46.27, 94.46, 73.93, 81.26, 59.09, 13.07, 5.15, 98.03, 61.76, 49.13, 87.67, 93.52, 91.73, 84.67, 84.36, 62.55, 72.67, 29.7, 38.73],
      "ilness": [76.82, 31.33, 62.92, 55.21, 8.16, 39.22, 79.25, 94.15, 9.74, 65.13, 7.27, 86.27, 77.16, 35.44, 19.43, 95.01, 49.19, 82.15, 78.26, 12.08]
    }
  }

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


  const [farmDataList, setFarmDataList] = useState(objectToArray(defaultFarm));
  const [listOfFarm, setListOfFarm] = useState(getListOfFarm(farmDataList));
  const [listOfProperty, setListOfProperty] = useState(getListOfProperty(farmDataList));
  const [selectedFarm, setSelectedFarm] = useState(null);
  const [selectedProperty, setSelectedProperty] = useState(null);

  return (<>
    <div className="
    flex  w-screen h-screen px-2"> {/* full page */}
      <div className="
      w-[15vw] h-screen"> {/* aside area */}
        <div className="
        h-[95%] my-4 mx-2 "> {/* aside wrapper */}
          <div className="
          h-[15%]  w-full rounded-lg bg-fuchsia-200"> {/* logo section*/}
            <div className="flex text-2xl italic font-extrabold h-fit w-fit mx-auto items-end">FAV: Monitoring</div>
          </div>
          <div className="
          w-full h-[calc(85%-8px)] mt-2 rounded-lg 
          bg-fuchsia-200
          "> {/* farm list section */}
            <div className="my-2 ml-2 mr-4 text-md font-bold flex justify-between items-center h-[5%]">
              <div className="flex">
                농장 목록
              </div>
              <button>
                +
              </button>
            </div> {/* top bar */}
            <div className="h-[calc(95%-16px)] w-[90%] mx-auto overflow-y-auto overflow-x-hidden scrollbar-hide">
              <FarmList listOfFarm={listOfFarm} setSelectedFarm={setSelectedFarm} />
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[85vw] h-screen" > {/* content */}
        <div className="h-[95%] my-4 rounded-lg flex flex-col bg-teal-200"> {/* content wrapper, Rounded Box */}
          <div className=" flex h-[5%] bg-teal-300 rounded-t-lg items-center"> {/* tab section */}
            <div className="ml-4 w-[4%] flex justify-between"> {/* navigation button section */}
              <button>  ◀ </button>
              <button> ▶</button>
            </div>
            <div className="ml-auto mr-4">
              USER1
            </div>
          </div>
          <div className=" flex justify-around h-[5%] bg-teal-400"> {/* tab section */}
            <PropertyList listOfProperty={listOfProperty} setSelectedProperty={setSelectedProperty}/>
          </div>
          <div className="h-[95%]"> {/* content section */}
            <ManagementContent farmDataList={farmDataList} selectedFarm={selectedFarm} selectedProperty={selectedProperty} />
          </div>
        </div>

      </div>
    </div>
</>)
}