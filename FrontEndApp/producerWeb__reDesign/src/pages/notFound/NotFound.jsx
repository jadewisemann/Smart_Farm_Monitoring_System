export default function NotFound() {
  
      
  return (
    <div className="w-screen h-screen " style={{
      backgroundColor: 'rgb(251, 113, 133)',
      backgroundImage: 'radial-gradient(at 97% 11%, rgb(207, 250, 254) 0, transparent 39%), radial-gradient(at 97% 56%, rgb(2, 132, 199) 0, transparent 58%), radial-gradient(at 62% 34%, rgb(191, 219, 254) 0, transparent 81%), radial-gradient(at 69% 36%, rgb(68, 64, 60) 0, transparent 47%), radial-gradient(at 13% 64%, rgb(254, 205, 211) 0, transparent 55%)'
    }}>
      <div className="w-full h-full flex flex-col items-center justify-center mt-[-60px]">
        <div className="text-[244px] tracking-[-10px] font-extrabold ">404 </div>
        <div className="text-[88px] font-extrabold mt-[-80px] "> Not Found</div>
      </div>
    </div>
  )
}
