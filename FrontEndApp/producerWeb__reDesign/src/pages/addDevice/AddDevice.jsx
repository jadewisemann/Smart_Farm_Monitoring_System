import { useState } from "react";
import AxiosApi from "../../api/AxiosApi";


export default function AddDevice() {
  // const deviceInfo = {
  //   "farmLabels": ["사과"],
  //   "macAddresses": ["d8:3a:dd:27:ec:e0"]  
  // }


  // async function addDevice() {
  //   try {
  //     const response = await 
  //     console.log('response', response)
  //   } catch (error) {
  //     error.status === 500
  //       ? console.log(error.status)
  //       :{}
  //     console.error("데이터 가져오기 실패:", error);
  //   }
  // }

  const [input, setInput] = useState("");
  const [addDeviceList, setList] = useState([]);

  function createDefaultArray(arr) {
  const length = arr.length;
  const defaultArray = new Array(length).fill("default");
  return defaultArray;
}

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setList([...addDeviceList, input.trim()]);
      setInput("");
    }
  };


  const handleSendData = async () => {
    try {
      // 서버의 주소와 요청 방식을 수정해 주세요.
      const response = await AxiosApi.post('/home/device', {
        "farmLabels": createDefaultArray(addDeviceList),
        "macAddresses": [...addDeviceList]  
      });
      window.location.reload();
    } catch (error) {
      alert("서버 전송 중 에러가 발생했습니다.");
    }
  };
  return (
    <div className="container mx-auto mt-10">
      <form onSubmit={handleSubmit} className="flex mb-5">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 border border-gray-400 flex-grow"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white ml-2">
          추가
        </button>
      </form>
      <ul className="list-disc pl-6 mb-5">
        {addDeviceList.map((item, index) => (
          <li key={index} className="mb-2">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
      <button onClick={handleSendData} className="p-2 bg-green-500 text-white">
        데이터 전송
      </button>
    </div>
  );
}


