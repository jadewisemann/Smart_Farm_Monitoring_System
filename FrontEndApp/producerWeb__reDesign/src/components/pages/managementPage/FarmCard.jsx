export default function FarmCard({farmTitle}) {
  const cardColor = "#" + Math.round(Math.random() * 0xffffff).toString(16); // set random color
  return (<>
    <div className="w-[18vw] h-24 flex items-center justify-center rounded-3xl" style={{backgroundColor: cardColor}}> {/* card-wrapper */}
      <div className="text-2xl font-extrabold">
        {farmTitle}
      </div>
    </div> 
  </>)
}
