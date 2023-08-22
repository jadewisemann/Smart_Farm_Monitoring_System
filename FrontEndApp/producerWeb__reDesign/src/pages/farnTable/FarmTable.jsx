import { useState, useEffect } from 'react';
import axios from 'axios';
import AxiosApi from '../../api/AxiosApi';

const DATA_API = '/home/farmLabel' 

const testData = [
  { 'mac_address': "12:23:34:45:56", 'farm': "사과" },
  { 'mac_address': "12:23:34:45:A1", 'farm': "사과" },
  { 'mac_address': "12:23:34:CC:56", 'farm': "복숭아" },
  { 'mac_address': "D0:23:34:45:56", 'farm': "복숭아" },
  { 'mac_address': "E1:23:34:45:56", 'farm': "복숭아 2" },
  { 'mac_address': "12:39:34:45:56", 'farm': "바나나 2" },
  { 'mac_address': "12:91:A4:45:56", 'farm': '' },
];

export default function FarmTable() {
  const [data, setData] = useState([]);
  console.log('data', data)
  const [selected, setSelected] = useState([]);
  const [editedData, setEditedData] = useState([]);
  const [farms, setFarms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newFarmName, setNewFarmName] = useState('');
  console.log('editedData', editedData)

  
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFarms([...new Set(data.map((item) => item.farm))]);
  }, [data]);

  async function fetchData() {
    try {
      const response = await AxiosApi.get('/home/data');
      setData(response.data);
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setData(testData)
    }
  }

  function handleCheckboxClick(mac_address) {
    setSelected((prevSelected) =>
      prevSelected.includes(mac_address)
        ? prevSelected.filter((item) => item !== mac_address)
        : [...prevSelected, mac_address]
    );
  }

  function handleFarmChange(newFarm) {
    setSelected((prevSelected) => {
      const updatedData = prevSelected.map((mac_address) => ({
        mac_address,
        farm: newFarm,
      }));

    setEditedData((prevEditedData) => {
      // 기존 선택된 mac_address의 데이터를 필터링합니다.
      const filteredData = prevEditedData.filter(
        (item) => !prevSelected.includes(item.mac_address)
      );

      // 선택된 mac_address의 최신 데이터와 함께 업데이트합니다.
      return [...filteredData, ...updatedData];
    });

      // 모든 선택이 적용된 후 선택 항목을 클리어합니다.
      return [];
    });
  }

  function handleAddFarm() {
    setFarms((prevFarms) => [...prevFarms, newFarmName]);
    setNewFarmName('');
    setShowModal(false);
  }
  async function handleSubmit() {
    try {
      // 서버에 수정된 데이터를 업데이트하도록 한 API 호출. 필요한 것에 따 URL 및 메소드 변경
      await AxiosApi.put(DATA_API, {
        "farmLabels": ["당근"],
        "macAddresses": ["d8:3a:dd:27:ec:e0"]
      });
      // 성공적으로 수정된 데이터를 data state에 반영
      setData((prevData) =>
        prevData.map((item) => {
          const updatedItem = editedData.find(
            (edit) => edit.mac_address === item.mac_address
          );
          return updatedItem ? updatedItem : item;
        })
      );
      console.log(data)
      // 거래 끝난 후 수정된 데이터를 검증하는 작업 마치기
      setEditedData([]);
    } catch (error) {
      console.error("데이터 제출 실패:", error);
    }
  }

  // async function handleSubmit() {
  //   editedData
  //   try {
  //     // 서버에 수정된 데이터를 업데이트하도록 한 API 호출. 필요한 것에 따 URL 및 메소드 변경
  //     await axios.put(DATA_API, editedData);
  //     // 성공적으로 수정된 데이터를 data state에 반영
  //     setData((prevData) =>
  //       prevData.map((item) => {
  //         const updatedItem = editedData.find(
  //           (edit) => edit.mac_address === item.mac_address
  //         );
  //         return updatedItem ? updatedItem : item;
  //       })
  //     );
  //     console.log(data)
  //     // 거래 끝난 후 수정된 데이터를 검증하는 작업 마치기
  //     setEditedData([]);
  //   } catch (error) {
  //     console.error("데이터 제출 실패:", error);
  //   }
  // }
  return (
    <div className="w-[60vw] ">
      <table className="table-auto border-collapse border mt-12 mx-auto w-[60vw] text-xl font-extrabold border-green-800">
        <thead>
          <tr>
            <th className="border border-green-600">선택</th>
            <th className="border border-green-600">MAC 주소</th>
            <th className="border border-green-600">농장</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {data.map((item) => (
            <tr key={item.mac_address}>
              <td className="border border-green-600 " >
                <input
                  type="checkbox"
                  checked={selected.includes(item.mac_address)}
                  onChange={() => handleCheckboxClick(item.mac_address)}
                />
              </td>
              <td className="border border-green-600">{item.mac_address}</td>
              <td className="border border-green-600">
                <select
                  disabled={!selected.includes(item.mac_address)}
                  value={editedData.find((edit) => edit.mac_address === item.mac_address)?.farm || item.farm}
                  onChange={(e) => handleFarmChange(e.target.value)} className='w-full text-center'
                >
                  {farms.map((farm) => (
                    <option key={farm} value={farm}>
                      {farm}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=' mx-auto w-[80%] flex justify-between mt-4'>
        
        <button className="text-2xl bg-transparent border-none cursor-pointer"
          onClick={() => setShowModal(true)}>+</button>
        <button className="text-white bg-green-600 border-0 py-2 px-8 focus:outline-none  hover:bg-green-700 rounded"
          onClick={handleSubmit} > 제출 </button>
      </div>
        {
          showModal && (
          <>
            <div className="fixed z-10 inset-0 overflow-y-auto">
              <div className="flex items-center justify-center min-h-screen text-center">
                <div className="fixed inset-0 bg-gray-500 bg-opacity-50 transition-opacity"></div>
                <div className="fixed z-20 inset-0 overflow-y-auto flex items-center justify-center min-h-screen text-center">  
                  <div className="inline-block align-middle bg-white p-8 rounded-lg border">
                    <h2 className="mb-4">새로운 농장 추가하기</h2>
                    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={newFarmName}
                      onChange={(e) => setNewFarmName(e.target.value)}
                    />
                    <div className="pt-4">
                      <button className="inline-flex items-center px-4 py-2 mr-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={handleAddFarm}>추가하기</button>
                      <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => setShowModal(false)}>취소하기</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>)
        }
  
        
</div>
      
  );
}