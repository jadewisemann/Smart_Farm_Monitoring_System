
export default function TitleCard({farmName}) {
  const getAlarm = []; 
  const alert = 'no alert on this farm'
  return (<>
    {/* full */}
    <div className="w-full h-full flex flex-col justify-center items-center bg-red-200 rounded-3xl">
      {/* title */}
      <div className="text-6xl font-extrabold uppercase"> {farmName} </div>
      {/* content */}
      <div className="text-xl font-bold"> {alert}</div>
    </div>
  </>)
}
