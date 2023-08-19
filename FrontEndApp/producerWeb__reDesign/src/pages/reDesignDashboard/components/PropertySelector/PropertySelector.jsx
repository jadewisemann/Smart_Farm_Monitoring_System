import { useState } from "react";
import PropertyButton from "./PropertyButton";

export default function PropertySelector({ setSelectedProperty, selectedFarm }) {

  const propertyList = [
    'prop1', 'prop2', 'prop3', 'prop4', 'prop5',
  ]

  const [selectedButtonIndex, setSelectedButtonIndex] = useState(-1);

  const handlePropertyChange = (e, index) => {
    setSelectedProperty(e.target.value);
    setSelectedButtonIndex(index);
  }
  
  const getButtonStyle = (index) => {
    return index === selectedButtonIndex ? { backgroundColor: '#3498db', color: '#fff' } : {};
  }

  return (<>
    <div className="h-full" style={ !selectedFarm && {visibility: 'hidden'}}>
      {
        propertyList.map((property, index) => (
          <PropertyButton property={property} key={index}
            onClick={e => handlePropertyChange(e, index)}
            style={ getButtonStyle(index) } /> 
        ))
      }
    </div>
  </>)
}
