import { useState } from "react";


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
}
