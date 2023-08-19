import { useState } from "react"
import FarmCard from "../cards/FarmCard"
export default function FarmAside({setSelectedFarm}) {
  const [farmList, setFarmList] = useState([
    'farm1', 'farm2', 'farm3', 'farm4'
  ]);
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);


  const handleFarmChange = (e, index) => {
    setSelectedFarm(e.target.value);
    setSelectedButtonIndex(index);
  }

  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }

  return (<>
    <div className="w-full h-fit px-4">
      {
        farmList.map((farmData, index) => (
          <FarmCard farm={farmData} key={index} onClick={e => handleFarmChange(e, index)} style={getButtonStyle(index)} />
        ))
      }
  </div>
  </>)
}
