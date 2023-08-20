import { useState } from "react";
import axios from "axios";

const POST_API = ''

export default function AddDevice() {

  const [input, setInput] = useState("");
  const [addDeviceList, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== "") {
      setList([...addDeviceList, input.trim()]);
      setInput("");
    }
  };

  const oldHandleSendData = () => {
    console.log(addDeviceList); // 서버에 보낼 데이터
  };

  const handleSendData = async () => {
    try {
      // 서버의 주소와 요청 방식을 수정해 주세요.
      const response = await axios.post(POST_API, {
        data: addDeviceList,
      });

      console.log(response.data); // 서버에서 받은 응답 결과
    } catch (error) {
      console.error("서버 전송 중 에러가 발생했습니다.", error);
    }
  };
  
  console.log(addDeviceList)

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


