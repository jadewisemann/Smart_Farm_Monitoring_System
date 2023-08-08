import { useState } from "react"
import ManagementHeader from "./ManagementHeader"
import FarmCard from "./FarmCard"
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
  const [index, setIndex] = useState(0);
  const farmList = [...Object.keys(farm), "+"].map(el => {
    return (
      <div className="w-[20%] p-4" key={index}>
        <FarmCard farmTitle={el}/>
      </div>
  )})
  return (<>
    <div className="flex flex-col items-center w-screen h-screen bg-red-300">
      <div className="fixed h-[10vh] bg-sky-300"> {/* header */}
          <ManagementHeader/>
      </div>
      <div className="w-[20%] h-[90vh] fixed left-0 bottom-0 bg-blue-200 overflow-y-scroll overflow-x-hidden"> {/* aside */}
        <div className="w-full flex flex-col">
          {farmList}
        </div>
      </div>
      <div className=" flex w-[80vw] h-[80vh] bg-fuchsia-400"  > {/* content */}
      </div>
      <div> {/* footer   */}
        footer
      </div>
    </div>
  </>)
}