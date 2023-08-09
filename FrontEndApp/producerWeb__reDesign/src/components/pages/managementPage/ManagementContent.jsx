export default function ManagementContent({ selectedFarm }) {
  const selectedData = (farmData) => {
    const [dataKey, dataValue] = farmData;
    return (
      <>
        <div className="flex flex-col">
          <div className="text-3xl font-extrabold">{dataKey}</div>
          <div className="flex flex-wrap">
            {dataValue.map((el, index) => {
              return (
                <div key={index} className="w-12 h-12 m-1">
                  {el}
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="">{selectedData(Object.entries(selectedFarm))}</div>
    </>
  );
}
