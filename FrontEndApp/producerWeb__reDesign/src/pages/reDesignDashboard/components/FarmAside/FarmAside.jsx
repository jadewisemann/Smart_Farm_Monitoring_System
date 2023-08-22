import { useState } from "react"
export default function FarmAside({ setSelectedFarm,farmList }) {
  
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
        farmList.map((farmData, index) => (<>
          <button key={index}  className='w-full h-24 bg-red-200 rounded-3xl my-4'
          value={farmData}  onClick={e => handleFarmChange(e, index)}
          style={getButtonStyle(index)} >
            <div className="text-3xl font-extrabold uppercase" >
              {farmData}
            </div>
        </button> 
      </>
        ))
      }
  </div>
  </>)
}
