import { useState, useEffect } from 'react';
import AxiosApi from '../../api/AxiosApi';

const DATA_API = '/home/farmLabel' 

const dummyData = {
  farmLabels: [
    'apple',       'banana',      'pear',        'peach',       'Guava',
    'Melon',       'water melon', 'apple',       'banana',      'pear',
    'peach',       'Guava',       'Melon',       'water melon', 'apple',
    'banana',      'pear',        'peach',       'Guava',       'Melon',
    'water melon', 'apple',       'banana',      'pear',        'peach',
    'Guava',       'Melon',       'water melon', 'apple',       'banana',
    'pear',        'peach',       'Guava',       'Melon',       'water melon',
    'apple',       'banana',      'pear',        'peach',       'Guava',
    'Melon',       'water melon', 'apple',       'banana',      'pear',
    'peach',       'Guava',       'Melon',       'water melon', 'apple',
    'banana',      'pear',        'peach',       'Guava',       'Melon',
    'water melon', 'apple',       'banana',      'pear',        'peach',
    'Guava',       'Melon',       'water melon', 'apple',       'banana',
    'pear',        'peach',       'Guava',       'Melon',       'water melon',
    'apple',       'banana',      'pear',        'peach',       'Guava',
    'Melon',       'water melon', 'apple',       'banana',      'pear',
    'peach',       'Guava',       'Melon',       'water melon', 'apple',
    'banana',      'pear',        'peach',       'Guava',       'Melon',
    'water melon', 'apple',       'banana',      'pear',        'peach',
    'Guava',       'Melon',       'water melon', 'apple',       'banana'
  ],
  macAddresses: [
    '74:68:0e:00:0d:ae', 'cb:c4:ac:a1:b5:38', 'd9:79:41:c9:fa:c8',
    'd5:26:14:05:da:47', 'a9:a1:23:f8:db:75', 'e4:39:91:e9:99:3f',
    '09:1e:c2:48:28:f0', '2a:82:41:0f:c5:a1', 'ad:b9:3e:ae:38:2d',
    'fd:4b:f7:74:47:b9', 'dc:e6:b3:10:13:92', '9a:67:1e:fd:3e:31',
    'b2:80:d9:ac:4d:47', '9e:90:a0:80:e5:eb', '54:23:90:97:b4:87',
    '11:6f:eb:5a:0a:73', '1d:43:97:77:26:22', '23:57:ed:49:95:d5',
    '8a:9e:a9:88:68:3c', 'ca:e1:db:a9:56:ce', 'df:c3:ef:4c:4d:35',
    'f7:6e:ab:db:04:28', 'ff:9a:85:80:eb:65', '05:72:d4:df:71:9c',
    'ad:2c:c1:84:38:fd', '60:bf:b3:fa:8d:bd', 'e2:cb:71:1b:3d:b0',
    '3e:f8:b2:87:96:56', '1c:a5:8f:5a:57:62', '69:7c:47:31:45:52',
    '85:e6:f8:be:d3:81', 'b4:40:02:79:be:bf', '4f:c0:bf:9d:21:f0',
    '42:8d:6d:8b:65:e7', 'd7:c1:b6:fb:b9:f6', '9c:d5:d9:e8:a0:92',
    'f8:bd:f9:b4:1d:50', '5d:44:c8:cf:1d:bc', '66:55:5b:32:5a:60',
    '91:8a:72:e6:cd:90', '33:fb:a2:ce:d9:76', '77:c5:f9:c9:f0:9a',
    '58:d9:f2:18:2a:bb', '5d:23:7a:4a:a3:8c', '71:1e:94:52:54:01',
    '8f:48:ea:85:22:a7', '2e:1f:6f:45:22:e8', '05:ee:d8:53:96:72',
    'c6:1b:55:7b:6d:c4', '5d:f0:cc:f2:91:a5', '49:d2:e8:e9:b9:ad',
    'e7:a3:64:e8:df:6b', '9d:2d:0b:63:d5:d5', '04:59:5c:4e:53:8e',
    '50:8f:0b:d4:5e:74', '6b:ca:03:5b:59:11', 'f1:da:de:63:b9:ef',
    '67:85:f3:b0:f4:ba', '94:eb:6e:2a:34:5e', '54:2b:49:60:86:48',
    'eb:17:dd:f9:71:d2', '49:dc:09:aa:71:f1', '19:c5:3e:ae:c0:c6',
    'c1:df:76:0f:37:4c', '2e:44:fa:02:08:41', '97:7c:e0:c3:70:e8',
    '48:9b:4c:35:40:b0', 'bf:6d:e9:62:0a:86', '6e:86:f4:01:83:a6',
    'ca:46:9d:77:8c:bd', '1f:00:3e:07:35:97', '7e:a1:64:db:74:a5',
    'da:de:1e:be:9d:b7', '88:81:3e:7e:0c:88', '5c:c0:c1:9c:0b:c6',
    '1c:ce:cf:21:6d:5e', '1b:46:5b:1f:24:3b', '0f:6f:58:03:17:cb',
    '7a:98:40:ca:93:f6', 'd0:a5:cc:7a:f9:62', '08:a1:e2:b2:22:fb',
    '02:62:e7:f7:8c:1b', 'e1:e8:dd:14:f1:53', '8b:00:74:1b:fb:28',
    '31:37:b3:52:14:b3', 'c3:3f:e5:d6:de:65', '2b:a3:23:f9:c5:cb',
    'd5:15:43:c4:3b:56', '82:9e:43:a3:d7:2c', '0e:99:a4:7f:94:c0',
    '1c:8d:a3:a6:79:fb', 'c2:fa:e1:8d:5c:51', 'e0:d3:d7:7f:9b:bf',
    '04:de:b3:92:fa:b4', '65:7d:8d:35:de:15', 'a7:0b:ae:9a:d6:0f',
    '17:42:fe:8a:a6:ab', '66:49:94:5e:cd:02', '96:5c:22:61:45:29',
    '1a:e5:79:70:f6:97'
  ]
}

export default function FarmTable() {
  const [data, setData] = useState([]);
  console.log('data', data)
  const [selected, setSelected] = useState([]);
  const [editedData, setEditedData] = useState([]);
  const [farms, setFarms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newFarmName, setNewFarmName] = useState('');
  console.log('editedData', editedData)

  function transformData(farmLabels, macAddresses) {
    const result = [];

    for (let i = 0; i < Math.min(farmLabels.length, macAddresses.length); i++) {
      result.push({
        mac_address: macAddresses[i],
        farm: farmLabels[i],
      });
    }

    return result;
  }
  
  function reverseTransformData(data) {
    const farmLabels = [];
    const macAddresses = [];

    for (const item of data) {
      farmLabels.push(item.farm);
      macAddresses.push(item.mac_address);
    }

    return {
      farmLabels,
      macAddresses,
    };
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFarms([...new Set(data.map((item) => item.farm))]);
  }, [data]);

  async function fetchData() {
    try {
      const response = await AxiosApi.get('/home/data');
      setData(transformData(response.data.farmLabels, response.data.macAddresses))
    } catch (error) {
      console.error("데이터 가져오기 실패:", error);
      setData(transformData(dummyData.farmLabels, dummyData.macAddresses))
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
      const filteredData = prevEditedData.filter(
        (item) => !prevSelected.includes(item.mac_address)
      );
      return [...filteredData, ...updatedData];
    });
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
      await AxiosApi.put(DATA_API, reverseTransformData(editedData));
      setData((prevData) =>
        prevData.map((item) => {
          const updatedItem = editedData.find(
            (edit) => edit.mac_address === item.mac_address
          );
          return updatedItem ? updatedItem : item;
        })
      );
      setEditedData([]);
    } catch (error) {
      console.error("데이터 제출 실패:", error);
    } 
  }

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
                <input className='w-6 h-6 m-2'
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
      <div className=' mx-auto w-[80%] flex justify-between mt-4 mb-12'>
        
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