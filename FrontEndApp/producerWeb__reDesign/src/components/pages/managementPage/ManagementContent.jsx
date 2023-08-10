export default function ManagementContent({farmDataList, selectedFarm, selectedProperty}) {
  let printData = '';
  Object.values(farmDataList).map(farmData => {
    farmData.farm == selectedFarm
      ? printData = farmData[selectedProperty]
      : {} 
    })
  return(
    <>
      <div>
        {selectedFarm}
      </div>
      <div>
        {selectedProperty}
      </div>
      <div>
        {
          console.log(Object.values(farmDataList).filter(farmData => {
            farmData.farm == selectedFarm 
          }))
        }
      </div>
    </>
  );
}
