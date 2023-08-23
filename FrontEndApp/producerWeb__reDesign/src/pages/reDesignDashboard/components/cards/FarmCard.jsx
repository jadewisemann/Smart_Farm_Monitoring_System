
export default function FarmCard({farm, onClick, style}) {
  
  return (<>
    <button className='w-full h-24 bg-red-200 rounded-3xl my-4' value={farm} onClick={onClick} style={style}>
      <div className="text-3xl font-extrabold uppercase">
        {farm}
      </div>
    </button> 
  </>)
}
