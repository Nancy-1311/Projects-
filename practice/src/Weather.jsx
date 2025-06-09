import React, { useState } from 'react';
import w1 from '../src/images/weather.png';
import temp from '../src/images/temp.png';
import sky from '../src/images/sky.png';
import humidity from '../src/images/humidity.png';
import wind from '../src/images/wind.png';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=4c387a404a22d0719097663961a44285`
      );
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
        setError('');
      } else {
        setError('City not found');
        setWeather(null);
      }
    } catch (err) {
      setError('Error fetching weather');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-100 to-sky-200 p-4 sm:p-8 flex justify-center items-center">
      <div className="w-full max-w-xl bg-black text-white p-5 rounded-xl shadow-xl">
        <h1 className="flex justify-center items-center text-2xl sm:text-3xl font-bold mb-4 text-center">
          <img src={w1} width={50} className="mr-3" alt="icon" /> Weather App
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 items-center mb-4">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city name"
            className="w-full p-2 text-black rounded-md"
          />
          <button
            onClick={fetchWeather}
            className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition"
          >
            Search
          </button>
        </div>

        {error && <p className="text-red-400 text-center mb-2">{error}</p>}

        {weather && (
          <div className="text-center font-semibold space-y-3">
            <h2 className="text-xl">{weather.name}, {weather.sys.country}</h2>
            <p className="flex justify-center items-center text-lg">
              <img src={temp} width={30} className="mr-2" alt="Temp" />
              {weather.main.temp}°C
            </p>
            <p className="flex justify-center items-center text-lg">
              <img src={sky} width={30} className="mr-2" alt="Sky" />
              {weather.weather[0].description}
            </p>
            <p className="flex justify-center items-center text-lg">
              <img src={humidity} width={30} className="mr-2" alt="Humidity" />
              Humidity: {weather.main.humidity}%
            </p>
            <p className="flex justify-center items-center text-lg">
              <img src={wind} width={30} className="mr-2" alt="Wind" />
              Wind: {weather.wind.speed} m/s
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;
