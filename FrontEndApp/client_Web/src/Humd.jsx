import Linechart from "./component/Linechart";

import { humdLinechartData } from "./data/humdLineChartData";

import Nav from "./component/Nav";
import BackHome from "./component/BackHome"


export default function Humd() {
  
  const idealHumdMin = 80
  const idealHumdMax = 92
  const humdFit = 92.7
  const humdQuality = 18.2

  return (<>
      <div className="w-[90%]  h-fit flex flex-col items-center ">
     {/* page 4 */}
          <div className="w-[90vh] h-screen  flex flex-col items-center  bg-teal-50">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-6xl font-bold">습도 환경</span>
              <div className="w-full  pl-[7%] h-[50vh]">
                <Linechart data={humdLinechartData} />
              </div>
              <div className="text-3xl font-bold text-center ">
                <span>이상적인 생육습도는 {idealHumdMin}에서 {idealHumdMax}% 사이에요 <br />
                    이 토마토는 {humdFit} % 습도조건을 만족하는 <br /> 상위 {humdQuality}% 에 드는 상품이이에요</span>
              </div>
          <Nav />
        <BackHome/>
          
        </div>
          </div>
      </div >
  </>)
}
