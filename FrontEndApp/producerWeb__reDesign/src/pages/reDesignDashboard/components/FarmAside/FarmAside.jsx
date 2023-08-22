import { useState } from "react"
export default function FarmAside({ setSelectedFarm,farmList }) {
  
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);
  
  const handleFarmChange = (index) => {
    setSelectedFarm(farmList[index]);
    setSelectedButtonIndex(index);
  };

  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }

  return (<>
    <div className="w-full h-fit px-4">
      {
        farmList.map((farmData, index) => (<>
          <button key={index}  className='w-full h-24 bg-stone-300 rounded-3xl my-4'
          onClick={() => handleFarmChange( index)}
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
