import { useState } from "react";


export default function FarmList({ listOfFarm, setSelectedFarm }) {

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handleFarmChange = (e, index) => {
    setSelectedFarm(e.target.value);
    setSelectedButtonIndex(index);
  }

  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }
  return (<>
    {listOfFarm.map((farmData, index) => (
      <div key={index} className="
      h-16 bg-fuchsia-100 mb-2 rounded-lg
      ">
        <button key={index} value={farmData}
          onClick={e => handleFarmChange(e, index)}
          style={getButtonStyle(index)}>
          {farmData}
        </button>
      </div>
    ))}
  
  </>)
}
