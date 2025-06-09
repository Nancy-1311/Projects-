import React, { useState } from 'react'
import w1 from '../src/images/weather.png'
import temp from '../src/images/temp.png'
import sky from '../src/images/sky.png'
import humidity from '../src/images/humidity.png'
import wind from '../src/images/wind.png'


const Weather = () => {
  const [city,setCity] = useState("");
  const [weather,setWeather] =useState(null);
  const [error,setError] =useState("");

  const fetchWeather = async() =>{
    if (!city)return;

    try{
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c387a404a22d0719097663961a44285`
      );
      const data = await res.json();

      if(data.cod === 200){
        setWeather(data);
        setError("");
      }else{
        setError("city name is not found");
        setWeather(null);
      }
    }catch(err){
      setError("fetching error weather")
    }
  };
  return (
    <div className='contaianer min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 p-8'>
      <div className="weather-container max-w-xl bg-black text-white p-3 mx-auto rounded-xl shadow-xl">
      <h1  className=' flex justify-center text-3xl text-center font-bold mt-2'> <img src={w1} width={55} className='mx-3' alt="" /> Weather App</h1>
      <div className="input-container flex mt-3">
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder='write a city name' className='w-full p-2 text-black' />
        <button onClick={fetchWeather} className='bg-gradient-to-r from-purple-800 to-purple-800 rounded-xl p-1 mx-3 text-white'>Search</button>
      </div>

      {error && <p className='text-red-800'>{error}</p>}

      {weather && (
        <div className="container2 font-bold">
          <h1 className='text-2xl text-center p-1'>{weather.name}, {weather.sys.country}</h1>
          <p className=' flex  justify-center text-xl text-center p-1'> <img src={temp} width={30} className='mx-1' alt="" />{weather.main.temp}°C</p>
          <p className=' flex justify-center text-xl text-center p-1'><img src="" alt="" /> <img src={sky} width={30} className='mx-1' alt="" />{weather.weather[0].description}</p>
          <p className=' flex justify-center text-xl text-center p-1'><img src={humidity} width={30} className='mx-2' alt="" />Humidity : {weather.main.humidity}%</p>
          <p className=' flex justify-center text-xl text-center p-1'><img src={wind} width={30} className='mx-2' alt="" />Wind : {weather.wind.speed}m/s</p>
        </div>
      )}


      </div>
      
    </div>
  )
}

export default Weather
