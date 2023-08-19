import FarmCard from "../cards/FarmCard"
export default function FarmAside() {
  return (<>
    <div className="w-full h-fit px-4">
      <FarmCard farm={ 'farm 1' } />
      <FarmCard farm={ 'farm 2' }/>
      <FarmCard farm={ 'farm 3' }/>
      <FarmCard farm={ 'farm 4' }/>
  </div>
  </>)
}
