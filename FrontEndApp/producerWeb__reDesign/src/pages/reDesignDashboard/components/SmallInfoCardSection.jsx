export default function SmallInfoCardSection() {
  const smallInfoList = [
    ['title1', 'value1'],
    ['title2', 'value2'],
    ['title3', 'value3'],
    ['title4', 'value4'],
    ['title5', 'value5'],
  ]
  return (<> 
      <div className={`grid grid-cols-${smallInfoList.length} w-full h-full`}>
      
      {
        smallInfoList.map((smallInfoData, index) => (
          <div className="px-4 py-2 pt-4" key={index}>
            <div className="w-full h-full bg-red-300 rounded-3xl flex flex-col items-center">
              <div className="h-[30%] flex items-center">
                <div className="text-xl font-extrabold ">{smallInfoData[0]}</div>
              </div>
              <div className="h-[70%] pb-8 flex items-center">
                <div className="text-3xl font-bold">{smallInfoData[1]}</div>
              </div>
            </div>
          </div>
        ))
      }
      
      </div>
  </>)
}
