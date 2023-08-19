
export default function FarmCard({farm}) {
  return (<>
    <button className='w-full h-24 bg-red-200 rounded-3xl my-4'>
      <div className="text-3xl font-extrabold uppercase">
        {farm}
      </div>
    </button> 
  </>)
}
