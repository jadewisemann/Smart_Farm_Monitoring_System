export default function FarmList({listOfFarm, setSelectedFarm}) {

  const handleFarmChange = e => setSelectedFarm(e.target.value);

  return (<>
    {listOfFarm.map((farmData, index) => (
      <div key={index} className="
      h-16 bg-fuchsia-100 mb-2 rounded-lg
      ">
        <button key={index} value={farmData} onClick={handleFarmChange}>
          {farmData}
        </button>
      </div>
    ))}
  
  </>)
}
