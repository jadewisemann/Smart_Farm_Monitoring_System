import { useEffect, useState } from "react"

import ManagementHeader from "./ManagementHeader"

export default function ManagementPage() {
  const defaultFarm = {
    Farm1: ['Sensor1', 'Sensor4', 'Sensor3', 'Sensor2'],
    Farm2: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm3: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm4: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm5: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm6: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm7: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
    Farm8: ['Sensor5', 'Sensor6', 'Sensor7', 'Sensor8'],
  }    
  
  const [farm, setFarm] = useState(defaultFarm);
  const [selectedFarm, setSelectedFarm] = useState(null);

  const fetchFarms = async () => {
    // const data = 
    // setFarms(data);
  };

  useEffect(() => {
    fetchFarms();
  }, []);

  const onFarmClick = (farm) => {
    setSelectedFarm(farm);
  };
  const farmList = farm.map((farmEl, index) =>{
    return (
        <li key={index} onClick={() => onFarmClick(farmEl)}>
          {`농장 ${index + 1}`}
        </li>
  )})
  return (<>
    <div className="flex flex-col items-center w-screen h-screen bg-red-300">
      <div className="fixed h-[10vh] items-center bg-sky-300"> {/* header */}
          <ManagementHeader/>
      </div>
      <div className="w-[220px] h-[90vh] fixed left-0 bottom-0 items-center bg-blue-200 overflow-y-scroll scrollbar-hide flex flex-col"> {/* aside */}
        <ul>
        </ul>
      </div>
      <div className=" flex w-[80vw] h-[80vh] bg-fuchsia-400"  > {/* content */}
      </div>
      <div> {/* footer   */}
        footer
      </div>
    </div>
  </>)
}