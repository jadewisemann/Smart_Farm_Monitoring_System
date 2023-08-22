import { useEffect, useState } from "react";
import axios from "axios";
export default function WeatherCard() {
  const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY
  console.log('API_KEY', API_KEY)
  
  let [weatherData, setWeatherData] = useState("");

  
  useEffect(() => {
      navigator.geolocation.getCurrentPosition((position) => {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          getWeather(lat, lon);
      });
  },[])  // 처음 렌더링 시에 경도와 위도를 받아와 getWeather function을 호출
  const getWeather = async (lat, lon) => {   
    try
    {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
      );   
      console.log(response)
      const weatherIcon = response.data.weather[0].icon;
      const weatherIconAddr = `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
      const currentTemp = parseInt(response.data.main.temp - 273.15)
      const minTemp = parseInt(response.data.main.temp_min - 273.15);
      const maxTemp = parseInt(response.data.main.temp_max - 273.15);
      const status = response.data.weather[0].main;

      setWeatherData({
        name: response.data.name,
        currentTemp: currentTemp,
        minTemp: minTemp,
        maxTemp: maxTemp,
        icon: weatherIconAddr,
        status: status,
      })
    }
    catch (e)
    {
      console.log(e);
    }
  };
  
  
  return (
    <>
      {/* weather wrapper */}
      <div className="flex items-center  justify-center w-full h-full">
        <div className="flex flex-col items-start pl-4  w-full">
          {/* today temp */}
          <div className='text-3xl font-bold'>
            {weatherData.currentTemp}°C           
          </div>
          {/* temp range */}     
          {/* <div className='text-xl font-bold'>
            {weatherData.minTemp} ~ {weatherData.maxTemp}°C           
          </div> */}
          {/* status */}
          <div className='text-xl font-medium'>
            {weatherData.status}
          </div>
          {/* location  */}
          <div className='text-sm font-extrabold'>
            {weatherData.name}
          </div>
        </div>
        {/* weather icon */}
        <div className="w-full ">
          <div className="w-fit mx-auto">
            <img src={weatherData.icon} className="scale-125"/>
          </div>
        </div>
      </div>
    </>
  )


}

