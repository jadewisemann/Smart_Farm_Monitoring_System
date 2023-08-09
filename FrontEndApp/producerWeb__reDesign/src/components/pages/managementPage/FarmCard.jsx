export default function FarmCard({farmName, farmValue, setSelectedFarm}) {
  const handleClick = () => { setSelectedFarm(farmValue) } 
  return (<> 
    <div className="w-full h-20 flex items-center justify-center rounded-3xl bg-teal-400"> {/* card-wrapper */}
      <button onClick={handleClick} className="text-xl font-extrabold">
        {farmName}
      </button>
    </div> 
  </>)
}
