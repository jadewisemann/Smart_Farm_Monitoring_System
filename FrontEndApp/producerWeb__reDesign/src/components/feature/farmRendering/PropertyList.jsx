export default function PropertyList({listOfProperty, selectProperty, setSelectedProperty }) {
  
  const handlePropertyChange = e => setSelectedProperty(e.target.value)
  
  return (<>
    {listOfProperty.map((property, index) => (
      <div key={index} className="">
        <button key={index} value={property} onClick={handlePropertyChange}>
          {property}
        </button>
      </div>
    ))}
  </>)
}
