export default function PropertyButton({property, onClick, style}) {
  return (<>
    <button className=" bg-gray-300 h-full w-24 rounded-xl mx-4" onClick={onClick} style={style}>
      <div className="uppercase text-xl font-bold">
        {property}
      </div>
  </button>
  </>)
}
