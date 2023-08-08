export default function MainPageContent() {
  return (<>
    <div className="flex flex-col justify-center items-center w-screen"> {/* Content Section */}
      <div className="w-[80vw] h-[90vh] flex flex-col items-center justify-start "> {/* Content Wrapper */}
        
        <div className="flex flex-col items-start md:items-end text-3xl font-bold mt-[10%]"> {/* hero text wrapper */}
          <div className="flex  flex-col md:flex-row items-start md:items-end ">
            We believe
            <div className=" md:ml-4 text-7xl sm:text-8xl font-extrabold italic before:content-['We believe'] before:text-3xl">Agriculture</div>
          </div>
          <div className="flex mt-4 flex-col md:flex-row items-start md:items-end">can become more
            <div className="md:ml-4 text-7xl sm:text-8xl font-extrabold italic">Valuable</div>
          </div>
          <div className="flex mt-4 flex-col md:flex-row items-start md:items-end italic">in the
            <div className="md:ml-4 text-7xl sm:text-8xl font-extrabold">Future</div>
          </div>
        </div>
        <div className="mt-[15%]  h-[5vh] w-[90vw] flex justify-center al"> {/* scroll wrapper */}
          <div className=" flex flex-col items-center text-2xl font-extrabold h-fit">
            <div className="mb-4"> scroll to see how we archive that </div>
            <div className="w-12 h-12 flex items-center justify-center bg-yellow-400 rounded-full">↓</div>
          </div>
        </div>
      </div>
      <div className="flex w-screen"> {/* Content */}
        <div className="w-[60%] flex flex-col justify-center"> {/* Paragraph */}
          <p className="text-6xl font-extrabold">
            미인을 만천하의
            <br />놀이 능히 이것이다
          </p>
          <p className="w-[80%]">
            청춘을 길지 든 아니한 못할 인간에 곧 때까지 것이다. 따뜻한 꾸며 인류의 품었기 때에, 두기 끝까지 이상, 것은 말이다. 때까지 설레는 못하다 기관과 맺어, 인간에 열매를 그리하였는가? 하여도 사람은 역사를 있다. 힘차게 가는 그들의 주는 것은 이것이다. 인간의 이 군영과 보라. 만물은 인생을 거친 그것은 크고 황금시대다. 오아이스도 피부가 그들의 위하여서. 꽃이 하는 노래하며 황금시대를 사막이다. 이상, 인생에 그들의 대중을 이것이야말로 실로 칼이다
          </p>
        </div>
        <div> {/* img */}
          <img src="img/farm_img_1.jpg" />
        </div>
      </div>
    </div>
  </>)
}
