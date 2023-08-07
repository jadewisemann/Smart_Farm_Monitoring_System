import { useState } from "react"
import { Link } from "react-router-dom"
export default function MainHeaderOneModal() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (<>
    <header className="flex justify-center w-screen h-[8vh] md:h-[12vh] min-w-max bg-fuchsia-50">
      <div className="flex  mt-auto w-[95%] sm:w-[85%] md:w-[80%] lg:w-[70%] h-[70%] bg-fuchsia-100 border-4  md:border-b-8 border-black md:border-b-black">
        <div className="flex flex-col items-center justify-center h-full bg-red-200 w-fit ">
          <div className="flex items-end mt-auto text-3xl not-italic md:italic h-fit">
            <div className="font-extrabold first-letter:text-3xl md:first-letter:text-5xl first-letter:not-italic">Futuristic</div> 
            <div className="font-extrabold first-letter:text-3xl md:first-letter:text-5xl first-letter:not-italic">Agriculture</div>
            <div className="font-extrabold first-letter:text-3xl md:first-letter:text-5xl first-letter:not-italic">Value</div>
          </div>
          </div>
        <div className="flex items-end w-full bg-fuchsia-400 ">
          <div className="hidden w-full md:flex">
            <div className="flex justify-end w-full bg-red-100 h-fit ">
              <div className="mx-2">why</div>
              <div className="mx-2">what</div>
              <div className="mx-2">how</div>
              <div className="mx-2">login</div>
            </div>
          </div>
          {/* modal */}
        </div>
      </div>
    </header>
</>)}