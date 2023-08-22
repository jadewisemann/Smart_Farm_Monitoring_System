import { useState, useEffect } from 'react';

const CurrentDateTime = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentDate(now);
      setCurrentTime(now);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year} ${month} ${day}`;
  };

  const timeOptions = {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  };

  return (
    <div className='flex flex-col justify-center items-center w-full h-full  text-3xl font-extrabold font-worksans text-gray-700'>
      <div> {formatDate(currentDate)}</div>
      <div>{currentTime.toLocaleTimeString('ko-KR', timeOptions)}</div>
    </div>
  );
};

export default CurrentDateTime;
