import { useState } from "react";

<<<<<<< HEAD
=======

>>>>>>> 62e2d6158e5b87e90d49cb2b52ddd950f3976ef7
export default function PropertyList({ listOfProperty, selectProperty, setSelectedProperty,selectedFarm }) {
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handlePropertyChange = (e, index) => {
    setSelectedProperty(e.target.value);
    setSelectedButtonIndex(index);
  };

  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }
  
  const isVisible = selectedFarm !== undefined && selectedFarm !== null;

<<<<<<< HEAD
  return (<>
    {listOfProperty.map((property, index) => (
      <div key={index} className="text-xl font-extrabold w-fit px-2 bg-red-100 rounded-lg mx-1" style={{visibility: isVisible?"visible":"hidden"}}>
        <button key={index} value={property} onClick={e => handlePropertyChange(e, index)}
        style={{...getButtonStyle(index)}}>
          {property}
        </button>
      </div>
    ))}
  </>)
=======
  return (
    <>
      {listOfProperty.map((property, index) => (
        <div key={index} className="">
          <button
            key={index}
            value={property}
            onClick={(e) => handlePropertyChange(e, index)}
            style={{...getButtonStyle(index),visibility: isVisible?"visible":"hidden"}}
          >
            {property}
          </button>
        </div>
      ))}
    </>
  );
>>>>>>> 62e2d6158e5b87e90d49cb2b52ddd950f3976ef7
}
