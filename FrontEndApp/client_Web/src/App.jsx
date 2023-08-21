// component


import { Avatar } from "@mui/material";
import Linechart from "./component/Linechart";
import Radar from "./component/Radar";
import tomato from "./image/tomato.png"
import { tempLinechartData } from "./data/tempLinechartData";
import { humdLinechartData } from "./data/humdLineChartData";
import { luminaLinechartData } from "./data/luminaLineChartData";
import profile from "./image/farmalProfile.png"
function App() {
  const farmerName = '안혁수'

  const productName = '짭짤이 토마토'


  const idealTempMin = 24
  const idealTempMax = 28
  const tempFit = 82.7
  const tempQuality = 22.1

  const idealHumdMin = 80
  const idealHumdMax = 92
  const humdFit = 92.7
  const humdQuality = 18.2
    
  const idealLuminaMin = 80
  const idealLuminaMax = 95
  const luminaFit = 88.3
  const luminaQuality = 5.4

  const overallScore = 4.2
  return (
    <>
      {/* full page */}
      <div className="w-screen max-w-3xl h-fit min-h-screen mx-auto flex flex-col items-center overflow-y-auto overflow-x-hidden bg-stone-50 select-none">
        {/* wrapper, 90vw */}
        <div className="w-[90%]  h-fit flex flex-col items-center ">
          {/* page 1 */}
          <div className="w-full h-screen mx-auto flex flex-col items-center ">
              <div className=" w-full flex flex-col justify-center mt-24">
                <div className="text-center text-4xl mb-6 font-bold" >해풍을 맞고 자라 더 맛있는</div>
                <div className=" text-[80px] font-extrabold leading-none tracking-tighter text-black flex flex-col items-center">
                  {productName}
                </div>
              </div>
              <img src={tomato} alt="" className="w-[80%] mt-24" />
          </div>      
          {/* page 2 */}
          <div className="w-[90vh] h-screen  flex flex-col items-center  bg-teal-50">
            <div className="w-full h-full flex flex-col items-center  ">
              <div className="ml-32 mt-16 mr-auto flex">
                <Avatar sx={{ width: 320, height: 320 }} src={profile} />
                <div className="w-[40%] break-keep ml-8  mt-12 text-xl">
                  <span className="text-4xl">안녕하세요! </span><br />
                  저는 <span className="font-bold text-2xl">부산 강서구 대저동</span>에서 정성을 담아 토마토를 키우는 농부, <span className="font-bold text-2xl">{farmerName}</span> 입니다. <br />
                  오늘은 저희 농장에서 정성으로 키운 맛있는 <span className="text-2xl font-bold">대저 토마토</span>를 소개하고자 합니다. <br />
                </div>
              </div>
              <div className="text-center w-full px-[10%] mt-24  text-3xl leading-relaxed">
                  소중한 대저의 흙과 햇살을 담은 이 토마토는 <br /> <span className="font-bold">짭짤한 맛과 단단한 과육</span>의 특징을 가지고 있어요. <br />
                  저희 농장에서는 환경과 건강을 생각하여 <br /> <span className="font-bold">무농약 재배</span>를 실천하고 있으니 안심하고 드세요. <br />
                저희는 <span className="font-bold">엄격한 기준</span>으로 토마토를 신중하게 <span className="font-bold">선별</span>하여 <br />
                고객님께 <span className="font-bold">최상의 상품</span>만을 선보임을 <span className="font-bold">약속</span>드립니다. <br />
                <span className="font-bold">
                  입에 담는 순간 시원한 맛이 터져나오는
                  <br /> 대저 토마토를 마음껏 즐겨보세요!
                </span>
              </div>
            </div>
          </div>
          {/* page 3 */}
          <div className="w-[90vh] h-screen flex flex-col items-center bg-teal-50">
            <div className="w-full h-full flex flex-col items-center  justify-center ">
              <span className="text-6xl font-bold">온도 환경</span>
              <div className="w-full  pl-[7%] h-[50vh]">
                <Linechart data={tempLinechartData} />
              </div>
              <div className="text-3xl font-bold text-center ">
                <span>이상적인 생육온도는 {idealTempMin}에서 {idealTempMax}도 사이에요 <br />
                    이 토마토는 {tempFit} % 온도조건을 만족하는 <br /> 상위 {tempQuality}% 에 드는 상품이이에요</span>
              </div>
            </div>
          </div>
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
            </div>
          </div>
          {/* page 5 */} 
          <div className="w-[90vh] h-screen  flex flex-col items-center  bg-teal-50">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-6xl font-bold">조도 환경</span>
              <div className="w-full  pl-[7%] h-[50vh]">
                <Linechart data={luminaLinechartData} />
              </div>
              <div className="text-3xl font-bold text-center ">
                <span>이상적인 생육 조도는 {idealLuminaMin}에서 {idealLuminaMax}% 사이에요 <br />
                    이 토마토는 {luminaFit} % 조도조건을 만족하는 <br /> 상위 {luminaQuality}% 에 드는 상품이이에요</span>
              </div>
            </div>
          </div>
          {/* page 6 */} 
          <div className="w-[90vh] h-screen  flex flex-col items-center  bg-teal-50">
            <div className="w-full h-full flex flex-col items-center  justify-center">
              <span className="text-6xl font-bold ">종합 점수</span>
              <div className="w-full   h-[50vh]">
                <Radar/>
              </div>
              <div className="text-3xl font-bold text-center ">
                이 {productName}의 종합 점수는 <br /> 5점 만점에 {overallScore} 점 입니다. 
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
