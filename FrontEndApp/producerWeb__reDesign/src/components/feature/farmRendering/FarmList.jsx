import { useState } from "react";

<<<<<<< HEAD
export default function FarmList({ listOfFarm, setSelectedFarm }) {

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handleFarmChange = (e, index) => {
    setSelectedFarm(e.target.value);
    setSelectedButtonIndex(index);
  }

  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }
=======
>>>>>>> 62e2d6158e5b87e90d49cb2b52ddd950f3976ef7

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
<<<<<<< HEAD
        <button key={index} value={farmData} style={getButtonStyle(index)}
          onClick={e => handleFarmChange(e, index)}
          className="w-full h-full">
=======
        <button key={index} value={farmData}
          onClick={e => handleFarmChange(e, index)}
          style={getButtonStyle(index)}>
>>>>>>> 62e2d6158e5b87e90d49cb2b52ddd950f3976ef7
          {farmData}
        </button>
      </div>
    ))}
  
  </>)
}
